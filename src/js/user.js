import { fetchUser } from './fakeApi.js';

const domElements = {
    headerUserId: document.querySelector('.header-user-id > span'),
    userIcon: document.querySelector('.user-icon-wrap > img'),
    menuUserId: document.querySelector('.menu-user-title > span'),
    menuUserIcon: document.querySelector('.menu-user-icon-wrap > img'),
    menuUserBalance: document.querySelector('.menu-user-balance'),
};

async function renderHeaderAndMenu() {
    const userInfo = await fetchUser();
    domElements.headerUserId.textContent = userInfo.id;
    domElements.menuUserId.textContent = userInfo.id;
    if (userInfo.photoUrl) {
        domElements.userIcon.src = userInfo.photoUrl;
        domElements.menuUserIcon.src = userInfo.photoUrl;
        domElements.userIcon.classList.add('hasPicture');
        domElements.menuUserIcon.classList.add('hasPicture');
    }
    const coins = userInfo.coins;
    domElements.menuUserBalance.textContent = `${coins[0].value} ${coins[0].code} | ${coins[1].value} ${coins[1].code}`;
}

renderHeaderAndMenu();