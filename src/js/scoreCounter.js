/* eslint-disable comma-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* global document */
export default class ScoreCounter {
  static score() {
    let scoreCounter = 0;
    const score = document.getElementsByClassName('score');
    document.addEventListener('click', (e) => {
      const { target } = e;
      console.log(target.className.includes('test'));
      if (target.className.includes('test')) {
        scoreCounter++;
        score[0].innerHTML = `Очки: ${scoreCounter}`;
        console.log(score[0]);
      }
    });
  }
}
