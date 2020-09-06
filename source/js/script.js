var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var popupLinks = document.querySelectorAll('.modal__open');
var popup = document.querySelector('.modal');

// Mobile menu

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
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
  for ( var i = 0; i < popupLinks.length; i++) {
    var popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal--show');
    });
  };
};

popup.addEventListener ('click', function (evt) {
  if (!evt.target.closest('.modal__window')) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});
