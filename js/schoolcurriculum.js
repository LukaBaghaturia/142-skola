const curriculums = [
    {
        name: 'სასკოლო სასწავლო გეგმის შეფასებისა და მისი შემდგომი გაუმჯობესების გეგმა',
        link: 'https://drive.google.com/file/d/10kB9whiffgwsmVGepHfQBn00fzaMXc3U/view',
    },
    {
        name: 'სასკოლო სასწავლო გეგმა 2025-2026',
        link: 'https://drive.google.com/file/d/1eMVWnCBdM0K8ykKVYy-BiO76hWhvN9fK/view',
    },
    {
        name: 'საბაზო საფეხურის კურიკულუმი',
        link: 'https://drive.google.com/file/d/1hu1twLuXW5kGJR9TvjQG_SNb-c3aMggZ/viewl',
    },
    {
        name: 'დაწყებითი საფეხურის კურიკულუმი',
        link: 'https://drive.google.com/file/d/1odz0PBqsgAWiYfc8zVrHdokkomph2837/view?usp=drive_open',
    },
    {
        name: 'დანართი - შემაჯამებელი დავალებების რაოდენობა 2025-2026',
        link: 'https://drive.google.com/open?id=13LfhCC72otvuHHjst-PnrqZDsx0NiNll&authuser=0',
    },
    {
        name: 'დანართი - შეფასების რუბრიკები',
        link: 'https://drive.google.com/open?id=1pKvYku_pjryLY3CaNOG7Gjm3OcM2Uszb&authuser=0',
    },
    {
        name: '"ჯანსაღი ცხოვრების წესი - გზა უკეთესი მომავლისკენ" - დ. მინდიაშვილი',
        link: 'https://drive.google.com/file/d/1HVLfkQmlQXfNyrNbuajNMHbVKdFyfXnX/view',
    }
];

const grid = document.getElementById('curriculumGrid');

curriculums.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('curriculum__item');

    el.innerHTML = `
        <div class="curriculum__item-name">${item.name}</div>
        <div class="curriculum__item-btn">
            <a href="${item.link} "target="_blank">გახსნა →</a>
        </div>
    `;

    grid.appendChild(el);
});