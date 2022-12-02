const text = [
  'Печать',
  'Световые буквы',
  'Вывески',
  'Световые короба',
  'Монтажи'
];

const lineOut = document.querySelector('.welcome__out');

let line = 0;
let count = 0;
let out = '';
let timeOut;

export function renderText() {
  const interval = setTimeout(() => {
    out += text[line][count];
    lineOut.textContent = out;
    count++;
    timeOut = 200;

    if (count >= text[line].length) {
      timeOut = 1000;
      count = 0;
      out = '';
      line++;

      if (line === text.length) {
        line = 0;
        clearTimeout(interval);
      }
    }

    renderText();
  }, timeOut);
}

