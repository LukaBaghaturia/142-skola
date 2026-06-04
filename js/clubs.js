const clubs = [
    {
        name: 'ბუნების მცველი',
        motto: '"დაიცავი ბუნება დღეს, რომ გქონდეს ხვალ"',
        mission: 'ეკო-კლუბი "ბუნების მცველი" აერთიანებს მოტივირებულ ახალგაზრდებს, რომლებიც ზრუნავენ გარემოზე და ავითარებენ ეკოლოგიურ ცნობიერებას.',
        consultant: 'კონსულტან��ი: სოფიკო ვეკუა',
        link: 'https://drive.google.com/file/d/1LUgPKRJhEg2LX-4o8x6jz5pT6-IrVGUq/view',
        image: 'images/clubs/bunebismcveli.jpg'
    },
    {
        name: 'ეკო კლუბი',
        motto: '"გარემო — ჩვენი საერთო სახლია"',
        mission: 'ეკო კლუბი ნებაყოფლობითი გაერთიანებაა, რომელიც ავითარებს გარემოსდაცვით ცნობიერებას და მდგრადი განვითარების იდეებს.',
        consultant: 'ხელმძღვანელი: ეკატერინე ტაბატაძე',
        link: 'https://drive.google.com/file/d/1juOBbI5XwBHKfvnkrFzrfJfcmWoPglwd/view',
        image: ''
    },
    {
        name: 'კინო კლუბი "ილუზიონი"',
        motto: '"კინო — ცხოვრების სარკე"',
        mission: 'კინო კლუბი "ილუზიონი" ავითარებს კინოკულტურას, კრიტიკულ აზროვნებას და შემოქმედებით უნარებს ფილმების ჩვენებისა და ანალიზის გზით.',
        consultant: 'კონსულტანტი: —',
        link: 'https://drive.google.com/file/d/1GlLrZ2ahtssYmLb9BLvYo1b67Mo8-OYT/view',
        image: ''
    },
    {
        name: 'მათემატიკის კლუბი "ალბიონი"',
        motto: '"მათემატიკა — ყველგანაა"',
        mission: 'IV კლასის მათემატიკის კლუბი აერთიანებს მოსწავლეებს, რომლებსაც უყვ��რთ მათემატიკა. ლოგიკური თამაშები, ვიქტორინები და ამოცანები — კვირაში ერთხელ.',
        consultant: 'კონსულტანტი: —',
        link: 'https://drive.google.com/file/d/1AAc4gvALGPPZ_9goI_JooNYBCZCDrEPa/view',
        image: ''
    },
    {
        name: 'სოციალური კლუბი',
        motto: '"ერთობა — ძალაა"',
        mission: 'სოციალური კლუბი აერთიანებს მოსწავლეებს სოციალური პასუხისმგებლობის, გუნდური მუშაობისა და საზოგადოებრივი ჩართულობის განვითარებისთვის.',
        consultant: 'კონსულტანტი: —',
        link: 'https://docs.google.com/document/d/1cQ-RaAnk_4sSSZUia41fto2xSEFslEEmqLT7RMujPF0/edit?usp=drive_open&ouid=102328174712508625090',
        image: ''
    },
    {
        name: 'მეწარმეობის კლუბი',
        motto: '"იდეიდან — წარმატებამდე"',
        mission: 'მეწარმეობის კლუბი ავითარებს მოსწავლეებში მეწარმეობრივ აზროვნებას, ფინანსურ წიგნიერებას და პრაქტიკულ უნარებს.',
        consultant: 'ხელმძღვანელი: ეკატერინე ტაბატაძე | ლიდერი: სალომე მოსიაშვილი',
        link: 'https://drive.google.com/file/d/1JYi-D36Rls4PbfeJUntyGcLL0fnBWYi5/view',
        image: ''
    },
    {
        name: 'მშობელთა კლუბი',
        motto: '"��რთად — შვილების მომავლისთვის"',
        mission: 'მშობელთა კლუბი აერთიანებს მოსწავლეთა მშობლებს სასკოლო ცხოვრებაში აქტიური მონაწილეობისთვის — კვირეულები, გამოფენები და საქველმოქმედო ღონისძიებები.',
        consultant: 'კოორდინატორი: —',
        link: 'https://drive.google.com/file/d/17kMlqal6L3mMe9gWhDp6HlrL7qp9nR7l/view',
        image: 'images/clubs/mshoblebi.jpg'
    },
    {
        name: 'სამოქალაქო განათლების კლუბი',
        motto: '"განათლებული მოქალაქე — ძლიერი სახელმწიფო"',
        mission: 'სამოქალაქო განათლების კლუბი ავითარებს მოსწავლეებში დემოკრატიული ღირებულებების, სამოქალაქო პასუხისმგებლობისა და კრიტიკული აზროვნების უნარს.',
        consultant: 'კონსულტანტი: —',
        link: 'https://drive.google.com/file/d/1MCxz_2rUN7MLb30gKKMNgJKPRhSKKMC3/view',
        image: 'images/clubs/samoqalaqo.jpg'
    },
];

const wreebi = [
    {
        name: 'ქორეოგრაფიული ანსამბლი "ლომისი"',
        category: 'ცეკვა',
        description: 'ქართული ტრადიციული ცეკვის ანსამბლი, რომელიც ამდიდრებს მოსწავლეებს ეროვნული კულტურით და სცენური გამოცდილებით.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/file/d/11QXAMEkWpAQ163h4LHymi7qCGh3-zPBL/view',
        image: 'images/clubs/wreebi/ქორეოგრაფიული ანსამბლი ლომისი.png'
    },
    {
        name: 'მხატვრული ტანვარჯიში',
        category: 'სპორტი',
        description: 'მხატვრული ტანვარჯიშის წრე ავითარებს სხეულის მოქნილობას, პლასტიკას, რიტმის გრძნობას და სცენურ გამოხატვას.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/open?id=1j5eS1hso4v7vpYytPcsUNkv0qxaB5izc&authuser=0',
        image: 'images/clubs/wreebi/მხატვრული-ტანვარჯიში.png'
    },
    {
        name: 'კალათბურთი',
        category: 'სპორტი',
        description: 'კალათბურთის წრე ავითარებს გუნდური თამაშის, სტრატეგიული აზროვნებისა და ფიზიკური გამძლეობის უნარებს.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/file/d/1nwDOO8-u5oaqR9quMqtwjiah9en1VGT1/view',
        image: 'images/clubs/wreebi/კალადბურთი.png'
    },
    {
        name: 'ხელოვნების სტუდია — ნანა ზარქუა',
        category: 'ხელოვნება',
        description: 'ნანა ზარქუას ხელოვნების სტუდია ავითარებს მოსწავლეებში შემოქმედებით უნარებს, ფერწერისა და სახვითი ხელოვნების სხვადასხვა ტექნ��კის გამოყენებით.',
        consultant: 'პედაგოგი: ნანა ზარქუა',
        link: '',
        image: 'images/clubs/wreebi/ხელოვნების სტუდია  ნანა ზარქუას ხელოვნების სტუდია.png'
    },
    {
        name: 'ჭადრაკი',
        category: 'ინტელექტი',
        description: 'ჭადრაკის წრე ავითარებს ლოგიკურ, სტრატეგიულ და ანალიტიკურ აზროვნებას, ასევე კონცენტრაციასა და მოთმინებას.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/open?id=1Ji7v9VBZ3C17HV0tMe5tZtewNOFAZQ0Q&authuser=0',
        image: 'images/clubs/wreebi/ჭადრაკი.png'
    },
    {
        name: 'ვოკალი',
        category: 'მუსიკა',
        description: 'ვოკალის წრე ავითარებს მოსწავლეებში სიმღერის ტექნიკას, სახმო შესაძლებლობებს, მუსიკალობასა და სცენურ თავდაჯერებულობას.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/file/d/1e0laLucMng_uTLQCiBn6vkNyMCh5FZkg/view?usp=drive_open',
        image: 'images/clubs/wreebi/ვოკალი.png'
    },
    {
        name: 'ხატვა',
        category: 'ხელოვნება',
        description: 'ხატვის წრე ეხმარება მოსწავლეებს სახვითი ხელოვნების საფუძვლების ათვისებაში — ნახაზი, ფერი, კომპოზიცია და შემოქმედებითი თვითგამოხატვა.',
        consultant: 'ხელმძღვანელი: —',
        link: 'https://drive.google.com/file/d/18sEXPrjMpcWg78A9YV4JHcj193gp1Iyv/view?usp=drive_open',
        image: 'images/clubs/wreebi/ხატვა.png'
    },
    {
        name: 'გიტარა',
        category: 'მუსიკა',
        description: 'გიტარის წრე სწავლობს გიტარის დაკვრის საფუძვლებს — აკორდები, მელოდიები და მუსიკალური ნოტაცია სხვადასხვა სტილში.',
        consultant: 'ხელმძღვანელი: —',
        link: '',
        image: 'images/clubs/wreebi/გიტარა.png'
    },
];

const clubsContainer = document.querySelector('.clubs__container');

function createClubCard(club) {
    const card = document.createElement('div');
    card.classList.add('club-card');

    card.innerHTML = `
        ${club.image
            ? `<div class="club-card__img-wrap"><img src="${club.image}" alt="${club.name}" class="club-card__img"></div>`
            : `<div class="club-card__img--placeholder">ფოტო</div>`
        }
        <div class="club-card__body">
            <div class="club-card__name">${club.name}</div>
            <div class="club-card__motto">${club.motto}</div>
            <div class="club-card__mission">${club.mission}</div>
            <div class="club-card__consultant">${club.consultant}</div>
            <div class="club-card__btn">


                <a href="${club.link}" target="_blank">სრული ინფორმაცია →</a>
            </div>
        </div>
    `;

    return card;
}
clubs.forEach(club => {
    clubsContainer.appendChild(createClubCard(club));
});


const main = document.querySelector('main');

// "კლუბები" — მთლიანად ზემოთ არსებული .clubs ბლოკის სათაური
const clubsSectionTitle = document.createElement('h2');
clubsSectionTitle.classList.add('section-title');
clubsSectionTitle.textContent = 'კლუბები';

const clubsSection = document.querySelector('.clubs');
if (clubsSection) {
    clubsSection.prepend(clubsSectionTitle);
}

const wreebiSection = document.createElement('section');
wreebiSection.classList.add('wreebi');

wreebiSection.innerHTML = `
    <h2 class="section-title">წრეები</h2>
    <div class="wreebi__container"></div>
`;

main.appendChild(wreebiSection);


const wreebiContainer = wreebiSection.querySelector('.wreebi__container');

function createWreebaCard(wreeba) {
    const card = document.createElement('div');
    card.classList.add('wreeba-card');

    const categoryBadge = `<span class="wreeba-card__category" data-category="${wreeba.category}">${wreeba.category}</span>`;

    const linkBtn = wreeba.link
        ? `<div class="club-card__btn"><a href="${wreeba.link}" target="_blank">მეტი ინფორმაცია →</a></div>`
        : '';

    card.innerHTML = `
        ${wreeba.image
            ? `<div class="club-card__img-wrap"><img src="${wreeba.image}" alt="${wreeba.name}" class="club-card__img"></div>`
            : `<div class="club-card__img--placeholder">ფოტო</div>`
        }
        <div class="club-card__body">
            ${categoryBadge}
            <div class="club-card__name">${wreeba.name}</div>
            <div class="club-card__mission">${wreeba.description}</div>
            <div class="club-card__consultant">${wreeba.consultant}</div>
            ${linkBtn}
        </div>
    `;

    return card;
}

wreebi.forEach(wreeba => {
    wreebiContainer.appendChild(createWreebaCard(wreeba));
});