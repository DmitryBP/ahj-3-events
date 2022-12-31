/* eslint-disable no-undef */
// eslint-disable-next-line import/no-named-as-default
import RandomMooving from '../components/randomMooving/RandomMoov';

// eslint-disable-next-line no-unused-vars, no-undef, import/prefer-default-export
const randomMoveing = new RandomMooving('.item');

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
