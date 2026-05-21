const curriculums = [
    {
        name: 'დაწყებითი საფეხურის კურიკულუმი',
        link: 'https://drive.google.com/file/d/1odz0PBqsgAWiYfc8zVrHdokkomph2837/view?usp=drive_open',
    },
    {
        name: 'საბაზო საფეხურის კურიკულუმი',
        link: 'https://drive.google.com/file/d/1hu1twLuXW5kGJR9TvjQG_SNb-c3aMggZ/view',
    },
    {
        name: 'საშუალო საფეხურის კურიკულუმი (1) (2)',
        link: 'https://drive.google.com/file/d/1LxT9mUthhZUMwD3JvJYti5eTkb-Goegp/view?usp=drive_open',
    },
];

const grid = document.getElementById('curriculumGrid');

curriculums.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('curriculum__item');

    el.innerHTML = `
        <div class="curriculum__item-name">${item.name}</div>
        <div class="curriculum__item-btn">
            <a href="${item.link}" target="_blank">გახსნა →</a>
        </div>
    `;

    grid.appendChild(el);
});