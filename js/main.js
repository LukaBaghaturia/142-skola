let burgerBtn = document.getElementById('burgerBtn');
let closeBtn = document.getElementById('closeBtn');
let navList = document.getElementById('navList');
let burgerIcon = burgerBtn.querySelector('.burger-icon');
let closeIcon = closeBtn.querySelector('.close-icon');

burgerBtn.addEventListener('click', function () {
    burgerIcon.classList.add('animate');

    setTimeout(() => {
        burgerBtn.style.display = 'none';
        burgerIcon.style.transform = 'none';
        burgerIcon.style.transition = 'none';
        burgerIcon.classList.remove('animate');

        setTimeout(() => {
            burgerIcon.style.transition = '';
            burgerIcon.style.transform = '';
        }, 10);

        closeBtn.style.display = 'flex';
    }, 150);

    navList.classList.add('flex');
});

closeBtn.addEventListener('click', function () {
    closeIcon.classList.add('animate');

    setTimeout(() => {
        closeBtn.style.display = 'none';
        closeIcon.style.transform = 'none';
        closeIcon.style.transition = 'none';
        closeIcon.classList.remove('animate');

        setTimeout(() => {
            closeIcon.style.transition = '';
            closeIcon.style.transform = '';
        }, 10);

        burgerBtn.style.display = 'flex';
    }, 150);

    navList.classList.remove('flex');
    document.querySelectorAll('.link-dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.arrow-icon').forEach(i => i.classList.remove('rotated'));
});

const arrowBtns = document.querySelectorAll('.arrow-btn');

arrowBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const navItem = this.closest('.nav__item');
        const dropdown = navItem.querySelector('.link-dropdown');
        const icon = this.querySelector('.arrow-icon');

        document.querySelectorAll('.nav__item').forEach(item => {
            if (item !== navItem) {
                item.querySelector('.link-dropdown')?.classList.remove('open');
                item.querySelector('.arrow-icon')?.classList.remove('rotated');
            }
        });

        dropdown.classList.toggle('open');
        icon.classList.toggle('rotated');
    });
});

document.querySelectorAll('.pdf-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const viewer = document.getElementById(this.dataset.target);
        viewer.classList.toggle('open');
        this.textContent = viewer.classList.contains('open') ? 'PDF დახურვა ↑' : 'PDF ნახვა ↓';
    });
});