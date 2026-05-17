const regulatorDocuments = [
    {
        name: 'მარეგულირებელი დოკუმენტები დრაივზე',
        link: 'https://drive.google.com/drive/folders/1eWuL6ZJRvZ2m9Fr1XPs7n0jYAD8SHiym',
    },
];

const grid = document.getElementById('regdocGrid');

regulatorDocuments.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('regdoc__item');

    el.innerHTML = `
        <div class="regdoc__item-name">${item.name}</div>
        <div class="regdoc__item-btn">
            <a href="${item.link}" target="_blank">გახსნა →</a>
        </div>
    `;

    grid.appendChild(el);
});