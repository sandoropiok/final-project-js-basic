const readline = require("readline-sync");
const chalk = require("chalk");
const figlet = require("figlet");

function playLastRiddleGame() {
  console.log(chalk.blue(figlet.textSync("Riddle Game")));
  console.log(chalk.green("Welcome to the Programming Riddle Game!"));

  const riddles = {
    easy: {
      question: "When was JavaScript created?",
      choices: ["1990", "1995", "2000", "2005"],
      answer: "1995",
    },
    medium: {
      question: "Which of these is a JavaScript framework?",
      choices: ["Django", "Rails", "Laravel", "React"],
      answer: "React",
    },
    hard: {
      question: "What keyword is used to declare a variable in ES6?",
      choices: ["let", "var", "int", "float"],
      answer: "let",
    },
  };

  let currentDifficulty = "easy";

  function getNextDifficulty() {
    if (currentDifficulty === "easy") return "medium";
    if (currentDifficulty === "medium") return "hard";
    return "end";
  }

  function playRound(difficulty) {
    const { question, choices, answer } = riddles[difficulty];
    console.log(`\n${chalk.cyan(question)}`);

    const selectedAnswer = readline.keyInSelect(choices, "Choose your answer:");

    if (selectedAnswer === -1) {
      console.log(chalk.yellow("Game exited."));
      return false;
    }

    if (choices[selectedAnswer] === answer) {
      console.log(chalk.green("Correct!"));
      return true;
    } else {
      console.log(chalk.red(`Wrong answer. The correct answer was: ${answer}`));
      return false;
    }
  }

  function playGame() {
    while (true) {
      const roundResult = playRound(currentDifficulty);
      if (!roundResult) return;

      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") {
        console.log(
          chalk.magenta("Congratulations! You completed all levels!")
        );
        break;
      }
    }
  }
}


module.export = playLastRiddleGame;