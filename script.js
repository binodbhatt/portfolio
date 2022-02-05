const menu = document.querySelector('.menu');
const cls = document.querySelector('.cls');
menu.addEventListener('click', openMenu);
cls.addEventListener('click', closeMenu);

function openMenu() {
    document.querySelector('.div').style.width = "250px";
}

function closeMenu() {
    document.querySelector('.div').style.width = "0";
}