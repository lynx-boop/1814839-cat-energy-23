let toggle = document.querySelector('.main-nav__toggle');

toggle.onclick = function () {
  toggle.classList.toggle('toggle-open');
  toggle.classList.toggle('toggle-close');
};
