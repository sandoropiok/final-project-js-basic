// riddleChallenge.js
const readline = require('readline-sync');
const chalk = require('chalk');

function riddleChallenge() {
  console.log(chalk.magentaBright(`
    A booming voice echoes from the shadows: 
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"
  `));

  let answer = readline.question(chalk.cyan('Your answer: ')).toLowerCase();

  if (answer === 'echo') {
    console.log(chalk.green("Correct! The door unlocks and you proceed to the next room."));
    // Optionally, add code to proceed to the next room
  } else {
    console.log(chalk.red("Wrong answer! The door remains locked."));
    // Optionally, prompt them to try again or handle a failure outcome
  }
}

module.exports = riddleChallenge;