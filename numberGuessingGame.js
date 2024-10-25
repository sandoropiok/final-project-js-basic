// numberGuessingGame.js
const readlineSync = require('readline-sync');
const chalk = require('chalk');

function playNumberGuessingGame() {
  console.log(chalk.blueBright("\nGuess the number between 1 and 10 to open the door..."));
  const targetNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly && attempts < 3) {
    const guess = readlineSync.questionInt(chalk.white("Enter your guess: "));
    attempts++;

    if (guess === targetNumber) {
      console.log(chalk.green("Correct! The door unlocks, and you proceed to the next room..."));
      guessedCorrectly = true;
      // Add code here to proceed to the next part of the dungeon if needed
    } else if (guess < targetNumber) {
      console.log(chalk.red("Too low! Try again."));
    } else {
      console.log(chalk.red("Too high! Try again."));
    }
  }

  if (!guessedCorrectly) {
    console.log(chalk.red("\nYou failed to guess the number. The door remains locked."));
    // Add any additional consequence or option to retry, if desired
  }
}

module.exports = playNumberGuessingGame;