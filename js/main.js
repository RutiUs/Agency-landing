const menuBtn = document.querySelector('.menu__btn-burger');
const menuMobile = document.querySelector('.menu__list');

menuBtn = addEventListener("click", ()=> {
    menuMobile.classList.toggle("menu--open");
});
