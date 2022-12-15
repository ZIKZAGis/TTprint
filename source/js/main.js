import {renderText} from './render-title.js';
import './swiper.js';
import './accordion.js';

renderText();

const navToggleBtn = document.querySelector('.header__nav-toggle');

navToggleBtn.addEventListener('click', () => {
  if (navToggleBtn.classList.contains('header__nav-toggle--closed')) {
    navToggleBtn.classList.remove('header__nav-toggle--closed');
    navToggleBtn.classList.add('header__nav-toggle--opened');
  } else {
    navToggleBtn.classList.remove('header__nav-toggle--opened');
    navToggleBtn.classList.add('header__nav-toggle--closed');
  }
});
