/* წრეები და კლუბები — API-დან */

const container = document.querySelector('.clubs__container');

fetch('/api/clubs')
    .then((r) => r.json())
    .then((clubs) => {
        if (!Array.isArray(clubs) || !clubs.length) {
            container.innerHTML = '<p style="color:#888">წრეები ჯერ არ არის.</p>';
            return;
        }
        clubs.forEach(renderClub);
    })
    .catch(() => {
        container.innerHTML = '<p style="color:#888">წრეების ჩატვირთვა ვერ მოხერხდა.</p>';
    });

function renderClub(club) {
    const card = document.createElement('div');
    card.classList.add('club-card');

    card.innerHTML = `
        ${club.image
            ? `<img src="${club.image}" alt="${club.name}" class="club-card__img">`
            : `<div class="club-card__img--placeholder">ფოტო</div>`
        }
        <div class="club-card__body">
            <div class="club-card__name">${club.name || ''}</div>
            <div class="club-card__motto">${club.motto || ''}</div>
            <div class="club-card__mission">${club.mission || ''}</div>
            <div class="club-card__consultant">${club.consultant || ''}</div>
            ${club.link
            ? `<div class="club-card__btn"><a href="${club.link}" target="_blank">სრული ინფორმაცია →</a></div>`
            : ''
        }
        </div>
    `;

    container.appendChild(card);
}
