const clubs = [
    {
        name: 'ბუნების მცველი',
        motto: '"დაიცავი ბუნება დღეს, რომ გქონდეს ხვალ"',
        mission: 'ეკო-კლუბი "ბუნების მცველი" აერთიანებს მოტივირებულ ახალგაზრდებს, რომლებიც ზრუნავენ გარემოზე და ავითარებენ ეკოლოგიურ ცნობიერებას.',
        consultant: 'კონსულტანტი: სოფიკო ვეკუა',
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
        mission: 'IV კლასის მათემატიკის კლუბი აერთიანებს მოსწავლეებს, რომლებსაც უყვართ მათემატიკა. ლოგიკური თამაშები, ვიქტორინები და ამოცანები — კვირაში ერთხელ.',
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
        motto: '"ერთად — შვილების მომავლისთვის"',
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

const container = document.querySelector('.clubs__container');

clubs.forEach(club => {
    const card = document.createElement('div');
    card.classList.add('club-card');

    card.innerHTML = `
        ${club.image
            ? `<img src="${club.image}" alt="${club.name}" class="club-card__img">`
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

    container.appendChild(card);
});