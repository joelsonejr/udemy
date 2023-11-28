'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let score = 20;
let highscore = 0;
let secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 10) + 1;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeSecretNumberSize = function (size) {
  document.querySelector('.number').style.width = size;
};

const toggleSecretNumberDisplay = function (display) {
  document.querySelector('.number').textContent = display;
};

const defineGuessValue = function (value) {
  if (value === '') {
    document.querySelector('.guess').value = value;
  } else {
    return Number(document.querySelector('.guess').value);
  }
};

secretNumber = generateSecretNumber();

//'Check'button events
document.querySelector('.check').addEventListener('click', function () {
  //When there is no input
  const guess = defineGuessValue();
  if (!guess || guess === '') {
    displayMessage('⛔ No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    changeBackgroundColor('#60b347');
    changeSecretNumberSize('30rem');
    toggleSecretNumberDisplay(secretNumber);

    //Define high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      updateScore(score);
    } else {
      displayMessage('You lost!!!');
      updateScore(0);
      changeBackgroundColor('#F00');
    }
  }
});

//'Again'button events - reseting game
document.querySelector('.again').addEventListener('click', function () {
  //Reset score
  score = 20;
  //Reset score value
  updateScore(score);
  //Reset secret number
  secretNumber = generateSecretNumber();
  //Reset message
  displayMessage('Start guessing...');
  //Reset number
  toggleSecretNumberDisplay('?');
  //Reset guess input field
  defineGuessValue('');
  //Reset background color
  changeBackgroundColor('#222');
  //Reset number width
  changeSecretNumberSize('15rem');
});
