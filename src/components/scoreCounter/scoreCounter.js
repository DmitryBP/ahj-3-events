/* global document */
// import RandomMooving from '../randomMooving/RandomMoov';
import './scoreStyle.css';

export default class ScoreCounter {
  static score() {
    const heartIcon = document.getElementsByClassName('heart');
    const container = document.querySelector('.container');

    console.log(container);
    let scoreCounter = 0;
    let heartNumber = 2;
    const score = document.getElementsByClassName('score');
    container.addEventListener('click', (e) => {
      const { target } = e;
      if (target.className.includes('img-js')) {
        scoreCounter += 1;
        score[0].innerHTML = `Очки: ${scoreCounter}`;
      } else {
        // heartBreak();

        heartIcon[heartNumber].classList.add('heartBreak');
        // console.log(heartNumber);
        // console.log(heartIcon);
        if (heartNumber > 0) {
          heartNumber -= 1;
        } else {
          // clearTimeout(gameLoop);
          console.log('Game Over');
        }
      }
    });
  }
}
