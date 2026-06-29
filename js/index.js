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
        title: ' საქართველოს უნივერსიტეტის ოლიმპიადა',
        text: 'ჩვენი სკოლის წარმატება!  სიხარულითა და სიამაყით გაცნობებთ, რომ ჩვენი სკოლის V-ბ კლასის მოსწავლემ, დემეტრე ქათამაძემ, საქართველოს უნივერსიტეტის მიერ ორგანიზებულ მათემატიკის ოლიმპიადაში წარმატებით იასპარეზა და საპატიო მეორე ადგილი მოიპოვა. ოლიმპიადაში მონაწილეობდნენ V-XII კლასების მოსწავლეები საქართველოს სხვადასხვა რეგიონიდან, რაც დემეტრეს მიღწევას კიდევ უფრო განსაკუთრებულს ხდის. დემეტრემ გამოავლინა მაღალი აკადემიური ცოდნა, ლოგიკური აზროვნება, მიზანდასახულობა და შრომისმოყვარეობა, რის შედეგადაც ღირსეულად წარმოაჩინა საკუთარი თავი და სკოლა. ვულოცავთ დემეტრეს ამ შესანიშნავ წარმატებას, ვუსურვებთ ახალი მწვერვალების დაპყრობასა და მომავალ გამარჯვებებს! გვეამაყები, დემეტრე!',
        images: [
            'images/mainpostsimages/საქართველოს უნივერსიტეტის ოლიმპიადა/1.jpg',
            'images/mainpostsimages/საქართველოს უნივერსიტეტის ოლიმპიადა/2.jpg',
            'images/mainpostsimages/საქართველოს უნივერსიტეტის ოლიმპიადა/3.jpg',
        ]
    },
    {
        title: '500- დან 493 ქულა  ',
        text: '',
        images: [
            'images/mainpostsimages/500- დან 493 ქულა/1.jpg',
            'images/mainpostsimages/500- დან 493 ქულა/2.jpg',
        ]
    },
    {
        title: 'პირველი ადგილი ძიუდოში',
        text: 'სინაზემ არ მოგვატყუოს😊💥🦋 I საპრიზო ადგილი ძიუდოში🏆142- ე ❤️',
        images: [
            'images/mainpostsimages/judo/1.jpg',
            'images/mainpostsimages/judo/2.jpg',
        ]
    },
    {
        title: 'გიორგი და სალომე რობაქიძეები ლექსების კრებული',
        text: 'გიორგი და სალომე რობაქიძეები(და- ძმა)💥 დღეს ეს საჩუქარი(ლექსების კრებული), მათი უძვირფასესი დედისაგან მიიღო ჩვენმა სკოლამ❤️ მადლობა და წარმატების უდიდესი სურვილი ნიჭიერ და - ძმას❤️💥🙏🏾',
        images: [
            'images/mainpostsimages/ლექსების კრებული/1.jpg',
            'images/mainpostsimages/ლექსების კრებული/2.jpg',
            'images/mainpostsimages/ლექსების კრებული/3.jpg',
            'images/mainpostsimages/ლექსების კრებული/4.jpg',
        ]
    },
    {
        title: 'საუკეთესო დირექტორს',
        text: '',
        images: [
            'images/mainpostsimages/დიპლომი დირექტორს/1.jpg',
            'images/mainpostsimages/დიპლომი დირექტორს/2.jpg',
            'images/mainpostsimages/დიპლომი დირექტორს/3.jpg',
        ]
    },
    {
        title: 'საჩუქარი საუკეთესო დირექტორს',
        text: '',
        images: [
            'images/mainpostsimages/დიპლომი დირექტორს/1.jpg',
            'images/mainpostsimages/დიპლომი დირექტორს/2.jpg',
            'images/mainpostsimages/დიპლომი დირექტორს/3.jpg',
        ]
    },
    {
        title: 'ეკოკლუბის „ბიო-ექსპედიცია“',
        text: 'სსიპ ქალაქ თბილისის 142-ე საჯარო სკოლის ბიოლოგიის მასწავლებელმა, დიმიტრი მინდიაშვილმა დაარსებული ეკოკლუბის „ბიო-ექსპედიცია“ სახელით, გაიმარჯვა „ეკოჯილდოების კონკურსში: საჯარო სკოლების გაძლიერება ცირკულარული ეკონომიკისთვის“. ეს გამარჯვება ჩემთვის მხოლოდ პირადი წარმატება არ არის - ეს არის ჩვენი სკოლის, ჩვენი მოსწავლეების, ეკოკლუბის წევრებისა და იმ საერთო იდეის აღიარება, რომელსაც ყოველდღიურად ვემსახურებით: 🌿 გარემოზე ზრუნვას ♻️ ნარჩენების შემცირებასა და გადამუშავების კულტურის განვითარებას 🌍 ეკოლოგიური ცნობიერების ამაღლებას 👩‍🔬 მოსწავლეების აქტიურ ჩართულობას მდგრადი მომავლის შექმნაში ეკოკლუბ „ბიო-ექსპედიციის“ საქმიანობა ყოველთვის ემსახურებოდა არა მხოლოდ ცოდნის მიღებას, არამედ გარემოსდაცვითი პასუხისმგებლობის გაძლიერებას, პრაქტიკული აქტივობების განხორციელებას და ახალგაზრდებში მწვანე აზროვნების ჩამოყალიბებას. ამიტომ ეს გამარჯვება კიდევ უფრო დიდი მოტივაციაა, რომ ახალი იდეებით, მეტი ენერგიითა და უფრო მასშტაბური ინიციატივებით გავაგრძელოთ მუშაობა. მადლობა ყველას, ვინც ამ გზაზე ჩემს გვერდით დგას - ჩემს მოსწავლეებს, სკოლას, კოლეგებსა და თითოეულ ადამიანს, ვისაც სჯერა, რომ განათლება გარემოს დაცვის ერთ-ერთი ყველაზე ძლიერი იარაღია. წინ კიდევ ბევრი საინტერესო ეკოინიციატივა გველოდება 💚♻️',
        images: [
            'images/mainpostsimages/ეკოკლუბის „ბიო-ექსპედიცია“/1.jpg',
        ]
    },
    {
        title: 'ილიას ბაღი',
        text: 'სსიპ ქალაქ თბილისის N142 საჯარო სკოლის პედაგოგიური საზოგადოების, მოსწავლეებისა და მშობლების გადაწყვეტილებით, სკოლის ,,ვარდების ბაღს” 🌹 სრულიად საქართველოს კათოლიკოს-პატრიარქის, ილია მეორის სახელის უკვდავსაყოფად ეწოდა ,,ილიას ბაღი”🌹 ღმერთი გფარავდეთ თითოეულ თქვენთაგანს და სრულიად საქართველოს❤️🙏🏾',
        images: [
            'images/mainpostsimages/ილიას ბაღი/ილიას ბაღი1.mp4',
        ]
    },
    {
        title: 'თბილისის N142 სკოლის მოსწავლე და მასწავლებელი ახალგაზრული მოძრაობის შემაჯამებელ ღონისძიებაზე საზეიმოდ დაჯილდოვდნენ',
        text: 'თბილისის N142 საჯარო სკოლის მოსწავლე საბა ჩილინდრიშვილი ახალგაზრდული მოძრაობა „დავითიანნის“ პროექტის გამარჯვებულია. სრული ინფორმაცის სანახავად ეწვიეთ საიტს <a href="https://www.etaloni.ge/geo/main/index/124821" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">etaloni.ge</a>',
        images: [
            'images/mainpostsimages/N142 სკოლის დაჯილდოვება/1.jpg',
        ]
    },
    {
        title: 'მხიარული სტარტები”  II/ბ და II/გ კლასებს შორის',
        text: ',,მხიარული სტარტები”  II/ბ და II/გ კლასებს შორის მხიარულად წარიმართა💥 142- ეში ❤️ #ყველაგამარჯვებულია💥👫',
        images: [
            'images/mainpostsimages/videopost/მხიარული სტარტები IIბ და IIგ კლასებს შორის.mp4',
        ]
    },
    {
        title: 'ახალგაზრდული მოძრაობა ',
        text: '142- ე 🌹 #ჩვენისკოლა ახალგაზრდული მოძრაობა,, დავითიანნის” დავითიანნი[DAVITIANNI] შემაჯამებელი საღამო და ჩვენი გამარჯვებული - საბა ჩილინდრიშვილი💥 მადლობის საპატიო სიგელით დაჯილდოვდა ქართული ენის მასწავლებელი - ლილიანა გვიჩია ლილიანა გვიჩია წლის განმავლობაში გაწეული ფასილიტაციისათვის❤️🌹 გილოცავთ ❤️ წარმატებები მარად❤️',
        images: [
            'images/mainpostsimages/videopost/ახალგაზრდული მოძრაობა .mp4',
        ]
    },
    {
        title: 'მხიარული სტარტები” და დიდი მხიარულება💥(III კლასები) 💥',
        text: ',,მხიარული სტარტები” და დიდი მხიარულება💥(III კლასები) 💥 ფიზიკური აღზრდისა და სპორტის მასწავლებელი: მანანა კავკასიძე 142-ეში ❤️ #ყველაგამარჯვებულია💥 Nana Metreveli💥 ნინია ნინა💥 Nino Khvedelidze💥 ნატალია სამყურაშვილი💥 Naira Germisashvili💥',
        images: [
            'images/mainpostsimages/videopost/,,მხიარული სტარტები” და დიდი მხიარულება💥(III კლასები) 💥.mp4',
        ]
    },
    {
        title: 'აფიშა',
        text: '142-ე საჯარო სკოლის მე-8 გ კლასის მოსწავლეები გიწვევთ ჩინური და იაპონური მუსიკის საღამოზე.4 ივნისს 12:00 საათზე, სკოლის სააქტო დარბაზში.',
        images: [
            'images/mainpostsimages/პოსტი მუსიკის საღამო/1.jpg',
        ]
    },
    {
        title: '142- ე - სულის სიმშვიდე... 🌹🌸🦋☀️🌹🌸🦋☀️',
        text: '',
        images: [
            'images/mainpostsimages/videopost/სულის სიმშვიდე.mp4'
        ]
    },
    {
        title: 'პირველ და მეოთხე კლასელთა გამოსაშვები ზეიმი.',
        text: '✨🏫 27 მაისს ჩვენს სკოლაში გაიმართა პირველ და მეოთხე კლასელთა გამოსაშვები ზეიმი. ეს იყო ჩვენი სკოლის ერთ-ერთი ულამაზესი დღე - პირველკლასელების პირველი ნაბიჯები და მეოთხეკლასელების ემოციური დამშვიდობება საყვარელ პედაგოგებთან 💗✨',
        images: [
            'images/mainpostsimages/videopost/გამოსაშვები ზეიმი.mp4'
        ]
    },
    {
        title: 'მგალობელთა გუნდის მიერ დადგმული სპეკტაკლი',
        text: '💥28.05.2026 🎭 ჩვენი სკოლის მგალობელთა გუნდის მიერ დადგმული სპეკტაკლი - "გვიანი გაზაფხული", პრემიერა. სკოლის დირექტორი: ეკატერინე ენდელაძე🌹💖 მუსიკალური რეჟისორი/ხელმძღვანელი : ჟანა გოგინავა 💐💗 სამხატვრო ხელმძღვანელი: ფიქრია ტაბატაძე💐💗 📸ფოტო/ვიდეო: ნათია გიორგაძე🥰',
        images: [
            'images/mainpostsimages/post1/1.jpg',
            'images/mainpostsimages/post1/2.jpg',
            'images/mainpostsimages/post1/3.jpg',
            'images/mainpostsimages/post1/4.jpg',
            'images/mainpostsimages/post1/5.jpg',
        ]
    },
    {
        title: 'მგალობელთა გუნდი სამების საკათედრო ტაძარში',
        text: '',
        images: [
            'images/mainpostsimages/videopost/video1.mp4'
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

// Lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <button class="lightbox__close">&times;</button>
    <div class="lightbox__content"></div>
`;
document.body.appendChild(lightbox);

const lightboxContent = lightbox.querySelector('.lightbox__content');
const lightboxClose = lightbox.querySelector('.lightbox__close');

function openLightbox(src, isVideoFile) {
    if (isVideoFile) {
        lightboxContent.innerHTML = `<video src="${src}" controls autoplay playsinline></video>`;
    } else {
        lightboxContent.innerHTML = `<img src="${src}" alt="">`;
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    const video = lightboxContent.querySelector('video');
    if (video) video.pause();
    lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
});
lightboxClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

function createMediaElement(src, alt) {
    if (isVideo(src)) {
        return `<video src="${src}" controls preload="metadata" playsinline class="post-video"></video>`;
    }
    return `<img src="${src}" alt="${alt}" class="post-image">`;
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

    // Lightbox click handlers
    const mediaContainer = card.querySelector('.post-card__slider');
    mediaContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.post-video, .post-image');
        if (!target) return;

        // თუ სლაიდერი არის “მრავლობითი” (რამდენიმე ფოტო/ვიდეო), მაშინ დაკლიკებული სურათი უბრალოდ გააკეთოს გადართვა სლაიდერზე
        // და არა ლაითბოქსში გახსნა. ეს მოთხოვნამ დაჯერა: "გადიდედბის მერე რომ ვაკლიკებ — სლაიდერი მარტო ერტ ფოტოს ნუ ადიდებ".
        // უკან დაბრუნება მოთხოვნაზე: მრავალფოტოიან/მრავალმედია სლაიდერზე დაკლიკებისას არ უნდა “ადიდებდეს” ფოტოებს.
        // ფოტოზე/ვიდეოზე დაჭერა უბრალოდ უნდა გადაგვიყვანოს იმავე სლაიდერზე შესაბამის სლაიდზე.
        if (post.images.length > 1) {
            const slides = card.querySelectorAll('.post-card__slide');
            const idx = Array.from(slides).findIndex(slide => slide.contains(target));
            if (idx !== -1) {
                slides.forEach((s, i) => {
                    s.classList.toggle('active', i === idx);
                });
                const dots = card.querySelectorAll('.post-card__dot');
                dots.forEach((d, i) => {
                    d.classList.toggle('active', i === idx);
                });
                const currentVideo = card.querySelector('.post-card__slide.active video');
                if (currentVideo) currentVideo.pause();
            }
            return;
        }

        // თუ მხოლოდ 1 მედიაა, მაშინ ჩვეულებრივ გააღოს ლაითბოქსში
        openLightbox(target.src, target.classList.contains('post-video'));
    });

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