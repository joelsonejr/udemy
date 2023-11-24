'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;

//'Check'button events
document.querySelector('.check').addEventListener('click', function () {
  //When there is no input
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Define high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Youuu Looose, Ha Ha Ha !!!!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Youuu Looose, HaHaHa !!!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

//'Again'button events
document.querySelector('.again').addEventListener('click', function () {
  //Reset score
  score = 20;
  //Reset score value
  document.querySelector('.score').textContent = score;
  //Reset secret number
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  //Reset message
  document.querySelector('.message').textContent = 'Start guessing...';
  //Reset number
  document.querySelector('.number').textContent = '?';
  //Reset guess input field
  document.querySelector('.guess').value = '';
  //Reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset number width
  document.querySelector('.number').style.width = '15rem';
});
