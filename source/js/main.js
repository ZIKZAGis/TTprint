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


const titleText = [
  'Печатная продукция',
  'Световые буквы',
  'Вывески',
  'Световые короба',
  'Монтажные работы'
];

let line = 0;
let count = 0;
let out = '';
const title = document.querySelector('h1');

function typeLine() {
  let interval = setTimeout(function () {
    out += titleText[line][count];
    title.innerHTML = out;
    count++;

    if (count >= titleText[line].length) {
      count = 0;
      line++;

      if (line === titleText.length) {
        clearTimeout(interval);
        return true;
      }
    }
    typeLine();
  }, 200);
}

typeLine();
