/* სასკოლო სასწავლო გეგმა — API-დან */

const grid = document.getElementById('curriculumGrid');

fetch('/api/documents?category=school_curriculum')
    .then((r) => r.json())
    .then((docs) => {
        if (!Array.isArray(docs) || !docs.length) {
            grid.innerHTML = '<p style="color:#888">დოკუმენტები ჯერ არ არის.</p>';
            return;
        }
        docs.forEach(renderItem);
    })
    .catch(() => {
        grid.innerHTML = '<p style="color:#888">დოკუმენტების ჩატვირთვა ვერ მოხერხდა.</p>';
    });

function renderItem(item) {
    const el = document.createElement('div');
    el.classList.add('curriculum__item');

    el.innerHTML = `
        <div class="curriculum__item-name">${item.name || ''}</div>
        <div class="curriculum__item-btn">
            <a href="${item.link}" target="_blank">გახსნა →</a>
        </div>
    `;

    grid.appendChild(el);
}
