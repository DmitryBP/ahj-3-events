/* global document */
// import RandomMooving from '../randomMooving/RandomMoov';
// eslint-disable-next-line import/no-cycle
import { randomMoveing } from '../../js/app';
import './scoreStyle.css';

export default class ScoreCounter {
  static score() {
    let heartIcon = document.getElementsByClassName('heart');
    const items = document.querySelectorAll('.item');

    let scoreCounter = 0;
    let heartNumber = 2;
    const score = document.getElementsByClassName('score');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        const { target } = e;
        if (target.className.includes('target')) {
          scoreCounter += 1;
          score[0].innerHTML = `Очки: ${scoreCounter}`;
        } else {
          heartIcon[heartNumber].classList.add('heartBreak');
          if (heartNumber > 0) {
            heartNumber -= 1;
          } else {
            randomMoveing.stop();
            heartNumber = 2;
            scoreCounter = 0;
            score[0].innerHTML = `Очки: ${scoreCounter}`;
            heartIcon = Array.from(heartIcon);
            heartIcon.forEach((element) => {
              element.classList.remove('heartBreak');
            });
          }
        }
      });
    });
  }
}
