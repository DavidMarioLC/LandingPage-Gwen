const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const stickMenu = document.querySelector('.menu-hamburguer-icon')
const listItemMenu = document.querySelectorAll('.list-link');


function showMenu(){
    menu.classList.toggle('showMenu');
    // menu.classList.toggle('hideMenu');
    stickMenu.classList.toggle('menuIconAnimate');
    //  stickMenu.classList.remove('menuIconAnimateHide');
}

function changeFocus(){
    menu.classList.toggle('showMenu');
    stickMenu.classList.toggle('menuIconAnimate');
    this.classList.add('isActive');
    listItemMenu.forEach(item=> item.classList.remove('isActive'))


}

menuIcon.addEventListener('click',showMenu);
listItemMenu.forEach(item=> item.addEventListener('click',changeFocus))