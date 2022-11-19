/* eslint-disable eqeqeq */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* global document */
const button = document.querySelectorAll('button.button');
const item = document.querySelectorAll('div.item');

const arr = [];
for (let j = 0; j <= 150; j++) {
  const g = Math.floor(Math.random() * 16);
  arr.push(g);
}
const unicArr = [...new Set(arr)];

let i = 0;
button[0].onclick = () => {
  setInterval(() => {
    if (i < unicArr.length - 1) {
      if (i == 0) {
        item[i].classList.add('test');
      } else {
        item[0].classList.remove('test');
        item[unicArr[i]].classList.add('test');
        if (i != 0) {
          item[unicArr[i - 1]].classList.remove('test');
        } else {
          item[unicArr[i]].classList.remove('test');
        }
      }
      i++;
    } else console.log('The end');
  }, 1000);
};
const score = 0;
console.log(score);
document.addEventListener('click', (e) => {
  const { target } = e;
  console.log(target.className.includes('test'));
});
