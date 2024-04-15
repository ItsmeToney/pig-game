"use strict";

const score1 = document.querySelector("#score0");
const score2 = document.querySelector("#score1");
const currentScore1 = document.querySelector(".cscore0");
const currentScore2 = document.querySelector(".cscore1");
const dice = document.querySelector(".dice");

const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");

const switchPlayer = function () {
  document.querySelector(`.cscore${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  document.querySelector(".Player0").classList.toggle("active-player");
  document.querySelector(".Player1").classList.toggle("active-player");
};

const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");

const init = function () {};

rollDice.addEventListener("click", function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove("hidden");

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`.cscore${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 25) {
      playing = false;
      document
        .querySelector(`.Player${currentPlayer}`)
        .classList.add("winning");
      dice.classList.add("hidden");
    } else switchPlayer();
  }
});

newGame.addEventListener("click", function () {
  playing = true;
  currentScore = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  document.querySelector(`.Player${currentPlayer}`).classList.remove("winning");
  if (currentPlayer === 1) {
    document.querySelector(".Player1").classList.remove("active-player");
    document.querySelector(".Player0").classList.add("active-player");
  }
  currentPlayer = 0;
  dice.classList.add("hidden");
});
