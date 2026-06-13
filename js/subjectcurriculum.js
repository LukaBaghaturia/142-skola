const curriculums = [
    {
        name: 'საშუალო საფეხური-ქართული სექტორი-11-12 კლასის კურიკულუმები',
        link: 'https://drive.google.com/drive/folders/1Co8q8BmFURLCMP9O3uvFMDHfSUjgoqAq',
    },
    {
        name: 'საშუალო საფეხური-რუსული სექტორი-11-12 კლასის კურიკულუმები',
        link: 'https://drive.google.com/drive/folders/1fe9XK43zbo_j5Rib932O0Ke2W_PIt7Hh',
    },
    {
        name: 'საბაზო საფეხური-ქართული სექტორისთვის-კურიკულუმები-7,8,910 კალსი',
        link: 'https://drive.google.com/drive/folders/1EUl3XTpZ9ErmLuhT9vJOE81FaNmJVre0',
    },
    {
        name: 'საბაზო საფეხური-რუსულის სექტორისთვის-კურიკულუმები-7,8,910 კალსი',
        link: 'https://drive.google.com/drive/folders/1FUtPXVIwDPd8UczupA7r_xRU_K3rd_fj',
    },
    {
        name: 'დაწყებითი საფეხური-ქართული სექტორი',
        link: 'https://drive.google.com/drive/folders/1jCufamy_KngIOazASYKCVUrEjUWrCWiN',
    },
    {
        name: 'დაწყებითი საფეხური-რუსული სექტორი',
        link: 'https://drive.google.com/drive/folders/16-W-FtpIa5TKpkWepQGBlExdjPdJN60S',
    },
    {
        name: 'საშუალო საფეხურის კურიკულუმი (1) (2)',
        link: 'https://drive.google.com/file/d/1LxT9mUthhZUMwD3JvJYti5eTkb-Goegp/view?usp=drive_open',
    },
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