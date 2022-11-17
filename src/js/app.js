/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* global document */
const button = document.querySelectorAll('button.button');
const item = document.querySelectorAll('div.item');

const arr = [];
for (let j = 1; j <= 250; j++) {
  const g = Math.floor(Math.random() * 16);
  arr.push(g);
}
const unicArr = [...new Set(arr)];
console.log(arr);
console.log(unicArr);

let i = 1;
button[0].onclick = () => {
  if (i <= unicArr.length) {
    item[unicArr[i]].classList.add('test');
    console.log(i, unicArr[i]);
    item[unicArr[i - 1]].classList.remove('test');
    i++;
  } else console.log('The end');
};
