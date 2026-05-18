/**
 * Cloudflare Pages Functions API — 142 საჯარო სკოლა.
 *
 * Routes (all under /api):
 *   POST   /api/login              { password }            -> sets session cookie
 *   POST   /api/logout                                     -> clears session cookie
 *   GET    /api/me                                         -> { authenticated }
 *   GET    /api/news | /api/clubs | /api/documents         -> public list
 *   POST   /api/<resource>         (auth)                  -> create
 *   PUT    /api/<resource>/:id     (auth)                  -> update
 *   DELETE /api/<resource>/:id     (auth)                  -> delete
 *
 * Bindings:  DB (D1)
 * Env vars:  ADMIN_PASSWORD (required), SESSION_SECRET (recommended)
 */

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };
const enc = new TextEncoder();

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  });
}

/* ---------------- auth ---------------- */

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function createToken(secret) {
  const exp = Date.now() + 1000 * 60 * 60 * 12; // 12 hours
  const payload = `admin.${exp}`;
  return `${payload}.${await hmac(secret, payload)}`;
}

async function verifyToken(token, secret) {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [role, exp, sig] = parts;
  if (!exp || Number(exp) < Date.now()) return false;
  const expected = await hmac(secret, `${role}.${exp}`);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

function getCookie(request, name) {
  const header = request.headers.get('Cookie') || '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

const secretOf = (env) => env.SESSION_SECRET || env.ADMIN_PASSWORD || 'change-me';
const isAuthed = (request, env) => verifyToken(getCookie(request, 'session'), secretOf(env));

/* ---------------- resources ---------------- */

const RESOURCES = {
  news: {
    table: 'news',
    columns: ['title', 'body', 'media', 'sort_order'],
    order: 'ORDER BY sort_order ASC, id DESC',
  },
  clubs: {
    table: 'clubs',
    columns: ['name', 'motto', 'mission', 'consultant', 'link', 'image', 'sort_order'],
    order: 'ORDER BY sort_order ASC, id DESC',
  },
  documents: {
    table: 'documents',
    columns: ['category', 'name', 'link', 'sort_order'],
    order: 'ORDER BY sort_order ASC, id DESC',
  },
};

function normalize(col, value) {
  if (col === 'media') {
    if (Array.isArray(value)) return JSON.stringify(value);
    if (typeof value === 'string') return value;
    return '[]';
  }
  if (col === 'sort_order') return Number(value) || 0;
  return value == null ? '' : String(value);
}

/* ---------------- router ---------------- */

export async function onRequest(context) {
  const { request, env, params } = context;
  const method = request.method;
  const segments = Array.isArray(params.path)
    ? params.path
    : params.path ? [params.path] : [];

  if (method === 'OPTIONS') return new Response(null, { status: 204 });
  if (!env.DB) return json({ error: 'D1 binding (DB) is not configured' }, 500);

  try {
    /* ---- auth routes ---- */
    if (segments[0] === 'login' && method === 'POST') {
      if (!env.ADMIN_PASSWORD) return json({ error: 'ADMIN_PASSWORD არ არის გაწერილი' }, 500);
      const body = await request.json().catch(() => ({}));
      if (body.password !== env.ADMIN_PASSWORD) return json({ error: 'არასწორი პაროლი' }, 401);
      const token = await createToken(secretOf(env));
      return json({ ok: true }, 200, {
        'Set-Cookie': `session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=43200`,
      });
    }
    if (segments[0] === 'logout' && method === 'POST') {
      return json({ ok: true }, 200, {
        'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0',
      });
    }
    if (segments[0] === 'me' && method === 'GET') {
      return json({ authenticated: await isAuthed(request, env) });
    }

    /* ---- resource routes ---- */
    const res = RESOURCES[segments[0]];
    if (res) {
      const id = segments[1];

      // public list
      if (method === 'GET' && !id) {
        let sql = `SELECT * FROM ${res.table}`;
        const binds = [];
        if (res.table === 'documents') {
          const cat = new URL(request.url).searchParams.get('category');
          if (cat) { sql += ' WHERE category = ?'; binds.push(cat); }
        }
        sql += ' ' + res.order;
        const { results } = await env.DB.prepare(sql).bind(...binds).all();
        if (res.table === 'news') {
          for (const r of results) {
            try { r.media = JSON.parse(r.media || '[]'); } catch { r.media = []; }
          }
        }
        return json(results);
      }

      // writes require auth
      if (['POST', 'PUT', 'DELETE'].includes(method) && !(await isAuthed(request, env))) {
        return json({ error: 'არ ხართ ავტორიზებული' }, 401);
      }

      // create
      if (method === 'POST' && !id) {
        const body = await request.json().catch(() => ({}));
        const cols = res.columns.filter((c) => body[c] !== undefined);
        if (!cols.length) return json({ error: 'ცარიელი მონაცემები' }, 400);
        const values = cols.map((c) => normalize(c, body[c]));
        const sql = `INSERT INTO ${res.table} (${cols.join(',')}) VALUES (${cols.map(() => '?').join(',')})`;
        const r = await env.DB.prepare(sql).bind(...values).run();
        return json({ ok: true, id: r.meta.last_row_id });
      }

      // update
      if (method === 'PUT' && id) {
        const body = await request.json().catch(() => ({}));
        const cols = res.columns.filter((c) => body[c] !== undefined);
        if (!cols.length) return json({ error: 'ცარიელი მონაცემები' }, 400);
        const values = cols.map((c) => normalize(c, body[c]));
        const sql = `UPDATE ${res.table} SET ${cols.map((c) => c + ' = ?').join(', ')} WHERE id = ?`;
        await env.DB.prepare(sql).bind(...values, id).run();
        return json({ ok: true });
      }

      // delete
      if (method === 'DELETE' && id) {
        await env.DB.prepare(`DELETE FROM ${res.table} WHERE id = ?`).bind(id).run();
        return json({ ok: true });
      }
    }

    return json({ error: 'Not found' }, 404);
  } catch (err) {
    return json({ error: String((err && err.message) || err) }, 500);
  }
}
