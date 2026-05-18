/* მთავარი გვერდი — ჰერო-სლაიდერი + სიახლეები (API-დან) */

/* ---------- ჰერო-სლაიდერი ---------- */
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

/* ---------- სიახლეები ---------- */
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

fetch('/api/news')
    .then((r) => r.json())
    .then((posts) => {
        if (!Array.isArray(posts) || !posts.length) {
            grid.innerHTML = '<p style="color:#888">სიახლეები ჯერ არ არის.</p>';
            return;
        }
        posts.forEach(renderPost);
    })
    .catch(() => {
        grid.innerHTML = '<p style="color:#888">სიახლეების ჩატვირთვა ვერ მოხერხდა.</p>';
    });

function renderPost(post) {
    const images = Array.isArray(post.media) ? post.media : [];
    const card = document.createElement('div');
    card.classList.add('post-card');

    const sliderHTML = `
        <div class="post-card__slider">
            ${images.map((src, i) => `
                <div class="post-card__slide ${i === 0 ? 'active' : ''}">
                    ${createMediaElement(src, post.title)}
                </div>
            `).join('')}

            ${images.length > 1 ? `
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
                    ${images.map((_, i) => `
                        <button class="post-card__dot ${i === 0 ? 'active' : ''}"></button>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;

    const contentHTML = `
        <div class="post-card__content">
            <h3 class="post-card__title">${post.title || ''}</h3>
            <p class="post-card__text">${post.body || ''}</p>
        </div>
    `;

    card.innerHTML = sliderHTML + contentHTML;
    grid.appendChild(card);

    if (images.length > 1) {
        const slideEls = card.querySelectorAll('.post-card__slide');
        const dotEls = card.querySelectorAll('.post-card__dot');
        const prev = card.querySelector('.post-card__arrow--left');
        const next = card.querySelector('.post-card__arrow--right');
        let cur = 0;

        function go(index) {
            const currentVideo = slideEls[cur].querySelector('video');
            if (currentVideo) currentVideo.pause();

            slideEls[cur].classList.remove('active');
            dotEls[cur].classList.remove('active');
            cur = (index + slideEls.length) % slideEls.length;
            slideEls[cur].classList.add('active');
            dotEls[cur].classList.add('active');
        }

        prev.addEventListener('click', () => go(cur - 1));
        next.addEventListener('click', () => go(cur + 1));
        dotEls.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
    }
}
