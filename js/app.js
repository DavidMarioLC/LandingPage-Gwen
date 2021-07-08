const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const stickMenu = document.querySelector('.menu-hamburguer-icon')

function showMenu(){
    menu.classList.toggle('showMenu');
    stickMenu.classList.toggle('menuIconAnimate');
}


menuIcon.addEventListener('click',showMenu);