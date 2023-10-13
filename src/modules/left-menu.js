const leftMenu = document.querySelector('.left-menu--hide');
const leftMenuOpenBtn = document.querySelector('.menu__main-menu-button--main');
const leftMenuCloseBtn = document.querySelector('.menu-button--close');

leftMenuOpenBtn.addEventListener('click', function () {
    leftMenu.classList.remove('left-menu--hide');
    leftMenu.classList.add('left-menu--show');
});

leftMenuCloseBtn.addEventListener('click', function () {
    leftMenu.classList.remove('left-menu--show');
    leftMenu.classList.add('left-menu--hide');
});