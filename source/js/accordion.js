const accardion = () => {
  const linksContainer = document.querySelector('.price__list');
  const listItem = document.querySelectorAll('.price__item h3');

  linksContainer.addEventListener('click', (e) => {
    listItem.forEach((elem) => {
      if (e.target === elem) {
        elem.parentNode.classList.toggle('price__item--opened');
      } else {
        elem.parentNode.classList.remove('price__item--opened');
      }
    });
  });
};

accardion();
