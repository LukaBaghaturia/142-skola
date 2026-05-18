/* მარეგულირებელი დოკუმენტები — API-დან */

const grid = document.getElementById('regdocGrid');

fetch('/api/documents?category=regulator')
    .then((r) => r.json())
    .then((docs) => {
        if (!Array.isArray(docs) || !docs.length) {
            grid.innerHTML = '<p style="color:#888">დოკუმენტები ჯერ არ არის.</p>';
            return;
        }
        docs.forEach(renderDoc);
    })
    .catch(() => {
        grid.innerHTML = '<p style="color:#888">დოკუმენტების ჩატვირთვა ვერ მოხერხდა.</p>';
    });

function renderDoc(item) {
    const el = document.createElement('div');
    el.classList.add('regdoc__item');

    el.innerHTML = `
        <div class="regdoc__item-name">${item.name || ''}</div>
        <div class="regdoc__item-btn">
            <a href="${item.link}" target="_blank">გახსნა →</a>
        </div>
    `;

    grid.appendChild(el);
}
