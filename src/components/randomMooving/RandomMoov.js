/* eslint-disable no-unused-vars */
/* global document */

import './rm.css';

export default class RandomMooving {
  constructor(el) {
    // eslint-disable-next-line no-param-reassign
    el = Array.from(document.querySelectorAll(el));
    this.el = el;
    this.btn1 = document.querySelector('.btn1');
    this.btn2 = document.querySelector('.btn2');
    this.btn1.addEventListener('click', this.start);
    this.btn2.addEventListener('click', this.stop);
    this.interval = this.start;
    this.flag = 0;
  }

  start = () => {
    if (this.flag === 0) {
      this.flag = 1;
      const arr = [0];
      for (let j = 1; j < 100; j += 1) {
        const randoom = Math.floor(Math.random() * 15);
        arr.push(randoom);
        if (arr[j - 1] === arr[j]) {
          arr[j] += 1;
        }
      }
      let i = 1;
      this.interval = setInterval(() => {
        this.el[arr[i]].classList.add('target');
        this.el[arr[i - 1]].classList.remove('target');

        if (i < arr.length - 1) {
          i += 1;
        } else {
          console.log('the end');
          clearInterval(this.interval);
        }
      }, 1000);
    }
  };

  stop = () => {
    this.flag = 0;
    clearInterval(this.interval);
    this.el.forEach((element) => {
      element.classList.remove('target');
    });
  };
}
