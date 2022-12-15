const priceItems = document.querySelectorAll('.price__item');
const priceList = document.querySelector('.price__list');


priceList.addEventListener('click', (evt) => {
  priceItems.forEach((elem) => {
    elem.classList.remove('price__item--opened');
  });

  if (evt.target.classList.contains('price__item')) {
    evt.target.classList.add('price__item--opened');
  }
});

