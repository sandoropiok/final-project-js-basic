const readline = require('readline-sync');
const chalk = require('chalk');

function playRockPaperScissors() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(chalk.yellow("\nTo proceed, beat the dungeon guard in Rock, Paper, Scissors!"));
  const playerChoice = readline.question(chalk.cyan('Choose rock, paper, or scissors: ')).toLowerCase();

  if (playerChoice === computerChoice) {
    console.log(chalk.yellow("It's a tie! Try again."));
    return playRockPaperScissors();
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(chalk.green("You win! The door unlocks."));
    return true;
  } else {
    console.log(chalk.red("You lost! Try again."));
    return playRockPaperScissors();
  }
}

module.exports = playRockPaperScissors;
