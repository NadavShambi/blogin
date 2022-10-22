function onMenu() {
    document.querySelector('body').classList.toggle('menu-open')
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 1010) document.querySelector('body').classList.remove('menu-open')
});

function onCloseMenu(){
    document.querySelector('body').classList.remove('menu-open')
}