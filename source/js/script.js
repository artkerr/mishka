var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var popupLinks = document.querySelectorAll('.button__modal-open');
var popup = document.querySelector('.modal');

// Mobile menu

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click',() => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  };
});

// Modal

if (popupLinks.length > 0) {
  popupLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      popup.classList.add('modal--show');
    });
  })
};

popup.addEventListener ('click', (evt) => {
  if (!evt.target.closest('.modal__window')) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});
