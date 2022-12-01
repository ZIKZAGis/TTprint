const titleText = [
  'Печатная продукция',
  'Световые буквы',
  'Вывески',
  'Световые короба',
  'Монтажные работы'
];

const title = document.querySelector('h1');

let line = 0;
let count = 0;
let out = '';
let timeOut;

export function renderText() {
  setTimeout(() => {
    out += titleText[line][count];
    title.textContent = out;
    count++;
    timeOut = 200;

    if (count >= titleText[line].length) {
      timeOut = 1000;
      count = 0;
      out = '';
      line++;

      if (line === titleText.length) {
        line = 0;
      }
    }

    renderText();
  }, timeOut);
}

