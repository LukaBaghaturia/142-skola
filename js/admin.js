/* ადმინ პანელი — №142 საჯარო სკოლა */

const CATEGORY_LABELS = {
    regulator: 'მარეგულირებელი',
    school_curriculum: 'სასკოლო გეგმა',
    subject_curriculum: 'საგნობრივი',
};

const SCHEMAS = {
    news: {
        title: 'სიახლეები',
        fields: [
            { key: 'title', label: 'სათაური', type: 'text', required: true },
            { key: 'body', label: 'ტექსტი', type: 'textarea' },
            { key: 'media', label: 'მედია', type: 'media', hint: 'სურათის ან ვიდეოს URL — თითო ცალკე ხაზზე' },
            { key: 'sort_order', label: 'რიგი', type: 'number', hint: 'მცირე ციფრი — სიის თავში' },
        ],
        summary: (it) => it.title,
        meta: (it) => (it.media || []).length + ' მედია-ფაილი',
    },
    clubs: {
        title: 'წრეები და კლუბები',
        fields: [
            { key: 'name', label: 'სახელი', type: 'text', required: true },
            { key: 'motto', label: 'დევიზი', type: 'text' },
            { key: 'mission', label: 'მისია / აღწერა', type: 'textarea' },
            { key: 'consultant', label: 'კონსულტანტი / ხელმძღვანელი', type: 'text' },
            { key: 'link', label: 'ბმული (სრული ინფორმაცია)', type: 'text' },
            { key: 'image', label: 'ფოტოს URL', type: 'text', hint: 'ცარიელი — გამოჩნდება „ფოტო" placeholder' },
            { key: 'sort_order', label: 'რიგი', type: 'number' },
        ],
        summary: (it) => it.name,
        meta: () => '',
    },
    documents: {
        title: 'დოკუმენტები',
        fields: [
            {
                key: 'category', label: 'კატეგორია', type: 'select', required: true, options: [
                    { value: 'regulator', label: 'მარეგულირებელი დოკუმენტები' },
                    { value: 'school_curriculum', label: 'სასკოლო სასწავლო გეგმა' },
                    { value: 'subject_curriculum', label: 'საგნობრივი კურიკულუმები' },
                ],
            },
            { key: 'name', label: 'სახელი', type: 'text', required: true },
            { key: 'link', label: 'ბმული', type: 'text' },
            { key: 'sort_order', label: 'რიგი', type: 'number' },
        ],
        summary: (it) => it.name,
        meta: (it) => CATEGORY_LABELS[it.category] || it.category,
    },
};

let currentTab = 'news';
let items = [];
let editingId = null;

/* ---------- elements ---------- */
const loginView = document.getElementById('loginView');
const dashView = document.getElementById('dashView');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const passwordInput = document.getElementById('passwordInput');
const itemList = document.getElementById('itemList');
const panelTitle = document.getElementById('panelTitle');
const statusMsg = document.getElementById('statusMsg');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const itemForm = document.getElementById('itemForm');

/* ---------- api ---------- */
async function api(path, options = {}) {
    const res = await fetch('/api/' + path, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    });
    let data = null;
    try { data = await res.json(); } catch (e) { /* no body */ }
    if (!res.ok) throw new Error((data && data.error) || ('შეცდომა ' + res.status));
    return data;
}

/* ---------- auth ---------- */
async function init() {
    try {
        const me = await api('me');
        if (me && me.authenticated) showDash();
        else showLogin();
    } catch (e) {
        showLogin();
    }
}

function showLogin() {
    loginView.hidden = false;
    dashView.hidden = true;
}

function showDash() {
    loginView.hidden = true;
    dashView.hidden = false;
    loadList();
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    try {
        await api('login', { method: 'POST', body: JSON.stringify({ password: passwordInput.value }) });
        passwordInput.value = '';
        showDash();
    } catch (err) {
        loginError.textContent = err.message;
    }
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
    try { await api('logout', { method: 'POST' }); } catch (e) { /* ignore */ }
    showLogin();
});

/* ---------- tabs ---------- */
document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.tab;
        loadList();
    });
});

/* ---------- list ---------- */
function showStatus(text, ok) {
    statusMsg.textContent = text;
    statusMsg.className = 'status-msg ' + (ok ? 'ok' : 'err');
    statusMsg.hidden = false;
    setTimeout(() => { statusMsg.hidden = true; }, 4000);
}

async function loadList() {
    const schema = SCHEMAS[currentTab];
    panelTitle.textContent = schema.title;
    itemList.innerHTML = '<p class="empty-msg">იტვირთება…</p>';
    try {
        items = await api(currentTab);
        renderList();
    } catch (err) {
        itemList.innerHTML = '<p class="empty-msg">ჩატვირთვის შეცდომა: ' + err.message + '</p>';
    }
}

function renderList() {
    const schema = SCHEMAS[currentTab];
    if (!items.length) {
        itemList.innerHTML = '<p class="empty-msg">ჩანაწერი არ არის. დააჭირე „ახალი დამატება".</p>';
        return;
    }
    itemList.innerHTML = '';
    items.forEach((it) => {
        const row = document.createElement('div');
        row.className = 'item-row';
        const meta = schema.meta(it);
        row.innerHTML =
            '<div class="item-info">' +
            '<div class="item-title"></div>' +
            (meta ? '<div class="item-meta"></div>' : '') +
            '</div>' +
            '<div class="item-actions">' +
            '<button class="btn-edit">რედაქტირება</button>' +
            '<button class="btn-delete">წაშლა</button>' +
            '</div>';
        row.querySelector('.item-title').textContent = schema.summary(it) || '(უსათაურო)';
        if (meta) row.querySelector('.item-meta').textContent = meta;
        row.querySelector('.btn-edit').addEventListener('click', () => openModal(it));
        row.querySelector('.btn-delete').addEventListener('click', () => deleteItem(it));
        itemList.appendChild(row);
    });
}

/* ---------- modal form ---------- */
document.getElementById('addBtn').addEventListener('click', () => openModal(null));
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

function openModal(item) {
    editingId = item ? item.id : null;
    modalTitle.textContent = item ? 'რედაქტირება' : 'ახალი ჩანაწერი';
    const schema = SCHEMAS[currentTab];
    itemForm.innerHTML = '';

    schema.fields.forEach((f) => {
        const wrap = document.createElement('div');
        wrap.className = 'field';
        const value = item ? item[f.key] : undefined;
        let control;

        if (f.type === 'textarea') {
            control = '<textarea name="' + f.key + '"></textarea>';
        } else if (f.type === 'media') {
            control = '<textarea name="' + f.key + '"></textarea>';
        } else if (f.type === 'select') {
            control = '<select name="' + f.key + '">' +
                f.options.map((o) => '<option value="' + o.value + '">' + o.label + '</option>').join('') +
                '</select>';
        } else {
            control = '<input type="' + (f.type === 'number' ? 'number' : 'text') +
                '" name="' + f.key + '">';
        }

        wrap.innerHTML =
            '<label>' + f.label + (f.required ? ' *' : '') + '</label>' +
            control +
            (f.hint ? '<div class="field-hint">' + f.hint + '</div>' : '');
        itemForm.appendChild(wrap);

        const el = wrap.querySelector('[name="' + f.key + '"]');
        if (f.required) el.required = true;
        if (f.type === 'media') {
            el.value = Array.isArray(value) ? value.join('\n') : (value || '');
        } else if (f.type === 'number') {
            el.value = value !== undefined && value !== null ? value : 0;
        } else {
            el.value = value !== undefined && value !== null ? value : '';
        }
    });

    const actions = document.createElement('div');
    actions.className = 'form-actions';
    actions.innerHTML =
        '<button type="button" class="btn-cancel">გაუქმება</button>' +
        '<button type="submit" class="btn-save">შენახვა</button>';
    itemForm.appendChild(actions);
    actions.querySelector('.btn-cancel').addEventListener('click', closeModal);

    modal.hidden = false;
}

function closeModal() {
    modal.hidden = true;
    editingId = null;
}

itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const schema = SCHEMAS[currentTab];
    const payload = {};
    schema.fields.forEach((f) => {
        const el = itemForm.querySelector('[name="' + f.key + '"]');
        if (f.type === 'media') {
            payload[f.key] = el.value.split('\n').map((s) => s.trim()).filter(Boolean);
        } else if (f.type === 'number') {
            payload[f.key] = Number(el.value) || 0;
        } else {
            payload[f.key] = el.value.trim();
        }
    });

    const saveBtn = itemForm.querySelector('.btn-save');
    saveBtn.disabled = true;
    saveBtn.textContent = 'ინახება…';
    try {
        if (editingId) {
            await api(currentTab + '/' + editingId, { method: 'PUT', body: JSON.stringify(payload) });
        } else {
            await api(currentTab, { method: 'POST', body: JSON.stringify(payload) });
        }
        closeModal();
        showStatus('შენახულია ✓', true);
        loadList();
    } catch (err) {
        saveBtn.disabled = false;
        saveBtn.textContent = 'შენახვა';
        showStatus('შეცდომა: ' + err.message, false);
    }
});

async function deleteItem(item) {
    const schema = SCHEMAS[currentTab];
    if (!confirm('წავშალო „' + (schema.summary(item) || 'ჩანაწერი') + '"?')) return;
    try {
        await api(currentTab + '/' + item.id, { method: 'DELETE' });
        showStatus('წაშლილია', true);
        loadList();
    } catch (err) {
        showStatus('შეცდომა: ' + err.message, false);
    }
}

init();
