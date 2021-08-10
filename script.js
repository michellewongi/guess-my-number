"use strict";

/*
document.querySelector(".message").textContent = "🎉 Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;

console.log(document.querySelector(".guess").value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (scoreNum) {
  document.querySelector(".score").textContent = scoreNum;
};
const displayNumber = function (num) {
  document.querySelector(".number").textContent = num;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("No number!");

    // When player wins
  } else if (guess === number) {
    displayMessage("🎉 Correct Number!");
    displayNumber(number);
    document.querySelector("body").style.backgroundColor = "#2b8013";
    document.querySelector(".number").style.width = "25rem";

    // display high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // if guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "🌞 Too high!" : "🌝 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💀 You have lost the game!");
      displayScore(0);
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayNumber("?");
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222035";
  document.querySelector(".number").style.width = "10rem";
});
