const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const stickMenu = document.querySelector('.menu-hamburguer-icon')
const listItemMenu = document.querySelectorAll('.list-link');


function showMenu(){
    menu.classList.remove('hideMenu');
    menu.classList.add('showMenu');
    stickMenu.classList.add('menuIconAnimate');
     stickMenu.classList.remove('menuIconAnimateHide');
}

function changeFocus(){
    listItemMenu.forEach(item=> item.classList.remove('isActive'))
    this.classList.add('isActive');

    menu.classList.remove('showMenu');
    menu.classList.add('hideMenu');
    stickMenu.classList.remove('menuIconAnimate');
    stickMenu.classList.add('menuIconAnimateHide');
}

menuIcon.addEventListener('click',showMenu);
listItemMenu.forEach(item=> item.addEventListener('click',changeFocus))