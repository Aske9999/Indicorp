const button = document.getElementById('menu-button')
const menu = document.getElementById('header__list')
const links = document.querySelectorAll('.header__links')


button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu')
    document.getElementsByTagName("body")[0].classList.toggle('body-non-scroll')
})
links.forEach((elem) =>{
    elem.addEventListener('click', () =>{
        menu.classList.remove('mobile-menu')
        document.getElementsByTagName("body")[0].classList.remove('body-non-scroll')
    })
})