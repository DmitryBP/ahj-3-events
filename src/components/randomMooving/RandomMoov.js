/* global document */

import './rm.css';

export default class RandomMooving {
  static random() {
    const button = document.querySelectorAll('button.button');
    const item = document.querySelectorAll('div.item');
    const arr = [];
    for (let j = 0; j <= 10; j += 1) {
      const g = Math.floor(Math.random() * 16);
      if (j - 1 !== j) {
        arr.push(g);
      }
    }

    let i = 0;
    button[0].onclick = () => {
      const gameLoop = setInterval(() => {
        if (i < arr.length - 1) {
          if (i === 0) {
            item[i].classList.add('img-js');
          } else {
            item[0].classList.remove('img-js');
            item[arr[i]].classList.add('img-js');
            if (i !== 0) {
              item[arr[i - 1]].classList.remove('img-js');
            } else {
              item[arr[i]].classList.remove('img-js');
            }
          }
          i += 1;
        } else clearTimeout(gameLoop);
      }, 1000);
    };
  }
}
