'use strict';

//Selecting elements
//Players
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
//Scores
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const scoresElement = document.querySelectorAll('.score');
const playersElement = document.querySelectorAll('.player');
const currentScoresElement = document.querySelectorAll('.current-score');
//Dice
const diceElement = document.querySelector('.dice');
//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

const newGame = function (player) {
  diceElement.classList.add('hidden');

  for (let i = 0; i < playersElement.length; i++) {
    playersElement[i].classList.remove('player--winner');
    currentScoresElement[i].textContent = 0;
    scoresElement[i].textContent = 0;
  }

  if (activePlayer === 1) {
    player1Element.classList.remove('player--active');
  }

  player0Element.classList.add('player--active');
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Initializing the game
newGame();

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate a dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //TODO: add active player detection.
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', newGame);
