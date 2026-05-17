const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;
let timer;

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slider__dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider__dot');

function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4000);
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

resetTimer();

const posts = [
    {
        title: 'მგალობელთა გუნდი სამების საკათედრო ტაძარში',
        text: '',
        images: [
            'images/mainpostsimages/videopost/video1.mp4' 
        ]
    },
    {
        title: 'ერთი დღე საზოგადოებრივი უსაფრთხოების მართვის ცენტრში',
        text: 'ქ.თბილისის 142-ე საჯარო სკოლის 9/გ კლასი ეწვია საზოგადოებრივი უსაფრთხოების მართვის ცენტრს — PUBLIC SAFETY COMMAND CENTER (WWW.112.GE). მოსწავლეებმა გაეცნენ ცენტრის საქმიანობას და მიიღეს ღირებული გამოცდილება.',
        images: [
            'images/mainpostsimages/post1/1.jpg',
            'images/mainpostsimages/post1/2.jpg',
            'images/mainpostsimages/post1/3.jpg',
            'images/mainpostsimages/post1/4.jpg',
            'images/mainpostsimages/post1/5.jpg',
        ]
    },
    {
        title: 'წარმატებით დასრულდა პროექტი — „ზამთრის სკოლა: ჯანსაღი ცხოვრება და ემპათია"',
        text: 'ჩვენი სკოლის V ბ კლასში გაიმართა საინტერესო, მრავალფეროვანი და შთამბეჭდავი პროექტის — „ზამთრის სკოლის" დახურვის ღონისძიება. პროექტის ფარგლებში აქტიურად იყო ჩართული ყველა საგნობრივი მიმართულება. პროექტს ხელმძღვანელობდა ეკატერინე ტაბატაძე. მეცადინეობებს უძღვებოდნენ: ქართული — ლილიანა გვიჩია, ისტორია — შორენა ხოტივრიშვილი, მათემატიკა — ლელა გოგობერიძე, რუსული — ქეთევან ჩიტაშვილი, ინგლისური — ეკატერინე ტაბატაძე, ხელოვნება — თაზო ლაპიაშვილი, მუსიკა — თეა არზიანი. მოსწავლეებმა დიდი პასუხისმგებლობითა და ემოციით ისაუბრეს პროექტში მიღებულ გამოცდილებაზე. გამარჯვებულები დაჯილდოვდნენ სულაკაურის გამომცემლობის მიერ საინტერესო წიგნებით. „ზამთრის სკოლა" იქცა ახალი ცოდნის, მეგობრობის, შემოქმედების, პასუხისმგებლობისა და წარმატების სივრცედ.',
        images: [
            'images/mainpostsimages/posti2/1.jpg',
            'images/mainpostsimages/posti2/2.jpg',
            'images/mainpostsimages/posti2/3.jpg',
            'images/mainpostsimages/posti2/4.jpg',
            'images/mainpostsimages/posti2/5.jpg',
        ]
    },
    {
        title: 'პერსონაჟის დღის ღონისძიება',
        text: 'პერსონაჟის დღის ღონისძიებასთან დაკავშირებით ქართული ენისა და ლიტერატურის მასწავლებლის, მაკა ფარეიშვილის მოსწავლეებმა: 5გ (მერი შავლუხაშვილი), 6ბ (ქეთი ჩიტაშვილი), 9ე (მარი გიგოლაშვილი), 10დ (მაკა ფარეიშვილი) დახატეს გმირები, შექმნეს საპრეზენტაციო ტექსტები და გააკეთეს კედლის გაზეთები. ნამუშევრების გამოფენა მოეწყო სკოლის სააქტო დარბაზში. მოსწავლეებმა შეძლეს ცოდნის თვალსაწიერის გაღრმავება. პატივისცემით მაკა ფარეიშვილი.',
        images: [
            'images/mainpostsimages/posti3/1.jpg',
            'images/mainpostsimages/posti3/2.jpg',
            'images/mainpostsimages/posti3/3.jpg',
            'images/mainpostsimages/posti3/4.jpg',
        ]
    },
    {
        title: '142-ე სასკოლო სპორტული ოლიმპიადა – „მინი ფეხბურთი"',
        text: '142-ე და 207-ე საჯარო სკოლებს შორის გამართული მატჩი დასრულდა 3:1, ჩვენი სკოლის სასარგებლოდ! თბილისის საქალაქო თამაშების მინი ფეხბურთის შესარჩევი ეტაპი — დღე VI. მადლობა თითოეულ მონაწილესა და გულშემატკივარს თავდადებისთვის! ჩვენ ერთად ვსწავლობთ გამარჯვებას! მხარდამჭერები: საქართველოს სპორტის სამინისტრო, საქართველოს განათლების, მეცნიერებისა და ახალგაზრდობის სამინისტრო, საქართველოს ეროვნული ოლიმპიური კომიტეტი.',
        images: [
            'images/mainpostsimages/posti4/1.jpg',
            'images/mainpostsimages/posti4/2.jpg',
            'images/mainpostsimages/posti4/3.jpg',
            'images/mainpostsimages/posti4/4.jpg',
        ]
    },
];

function isVideo(src) {
    return /\.(mp4|webm|ogg)$/i.test(src);
}

function createMediaElement(src, alt) {
    if (isVideo(src)) {
        return `<video src="${src}" controls preload="metadata" playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
    }
    return `<img src="${src}" alt="${alt}">`;
}

const grid = document.getElementById('postsGrid');

posts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('post-card');

    const sliderHTML = `
        <div class="post-card__slider">
            ${post.images.map((src, i) => `
                <div class="post-card__slide ${i === 0 ? 'active' : ''}">
                    ${createMediaElement(src, post.title)}
                </div>
            `).join('')}

            ${post.images.length > 1 ? `
                <button class="post-card__arrow post-card__arrow--left">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 12L15.6464 7.64645C16.037 7.25592 16.037 6.62276 15.6464 6.23223C15.2559 5.84171 14.6228 5.84171 14.2322 6.23223L9.23223 11.2322C8.84171 11.6228 8.84171 12.2559 9.23223 12.6464L14.2322 17.6464C14.6228 18.037 15.2559 18.037 15.6464 17.6464C16.037 17.2559 16.037 16.6228 15.6464 16.2322L11.2929 12Z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="post-card__arrow post-card__arrow--right">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 12L8.35355 7.64645C7.96303 7.25592 7.96303 6.62276 8.35355 6.23223C8.74408 5.84171 9.37724 5.84171 9.76777 6.23223L14.7678 11.2322C15.1583 11.6228 15.1583 12.2559 14.7678 12.6464L9.76777 17.6464C9.37724 18.037 8.74408 18.037 8.35355 17.6464C7.96303 17.2559 7.96303 16.6228 8.35355 16.2322L12.7071 12Z" fill="currentColor"/>
                    </svg>
                </button>
                <div class="post-card__dots">
                    ${post.images.map((_, i) => `
                        <button class="post-card__dot ${i === 0 ? 'active' : ''}"></button>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;

    const contentHTML = `
        <div class="post-card__content">
            <h3 class="post-card__title">${post.title}</h3>
            <p class="post-card__text">${post.text}</p>
        </div>
    `;

    card.innerHTML = sliderHTML + contentHTML;
    grid.appendChild(card);

    if (post.images.length > 1) {
        const slides = card.querySelectorAll('.post-card__slide');
        const dots = card.querySelectorAll('.post-card__dot');
        const prevBtn = card.querySelector('.post-card__arrow--left');
        const nextBtn = card.querySelector('.post-card__arrow--right');
        let current = 0;

        function goTo(index) {
            const currentVideo = slides[current].querySelector('video');
            if (currentVideo) currentVideo.pause();

            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        prevBtn.addEventListener('click', () => goTo(current - 1));
        nextBtn.addEventListener('click', () => goTo(current + 1));
        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    }
});