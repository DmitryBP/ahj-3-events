/* eslint-disable comma-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* global document */

export default class RandomeMoove {
  static mooving() {
    const startButton = document.querySelectorAll(
      'button.startButton'
    );
    const item = document.querySelectorAll('div.item');
    const arr = [];

    for (let j = 0; j <= 150; j++) {
      const g = Math.floor(Math.random() * 16);
      arr.push(g);
    }
    const unicArr = [...new Set(arr)];

    let i = 0;
    startButton[0].onclick = () => {
      setInterval(() => {
        if (i < unicArr.length - 1) {
          if (i == 0) {
            item[i].classList.add('target');
          } else {
            item[0].classList.remove('target');
            item[unicArr[i]].classList.add('target');
            if (i != 0) {
              item[unicArr[i - 1]].classList.remove('target');
            } else {
              item[unicArr[i]].classList.remove('target');
            }
          }
          i++;
        } else console.log('The end');
      }, 1000);
    };
  }
}
