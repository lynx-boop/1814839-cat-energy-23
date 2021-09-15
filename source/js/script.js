const toggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

toggle.classList.remove('main-nav__toggle--no-js');
menu.classList.remove('main-nav__list--no-js');

toggle.onclick = function () {
  if (toggle.classList.contains('main-nav__toggle--close')) {
    toggle.classList.remove('main-nav__toggle--close');
    toggle.classList.add('main-nav__toggle--open');
    menu.classList.remove('main-nav__list--close');
    menu.classList.add('main-nav__list--open');
  } else {
    toggle.classList.add('main-nav__toggle--close');
    toggle.classList.remove('main-nav__toggle--open');
    menu.classList.add('main-nav__list--close');
    menu.classList.remove('main-nav__list--open');
  }
}
