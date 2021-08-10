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

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // When player wins
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#2b8013";

    document.querySelector(".number").style.width = "25rem";

    // when number is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🌞 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💀 You have lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when number is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🌝 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💀 You have lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222035";
  document.querySelector(".number").style.width = "10rem";
});
