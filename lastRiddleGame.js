// playLastRiddleGame.js
const readline = require("readline-sync");
const chalk = require("chalk");
const figlet = require("figlet");

const playLastRiddleGame = () => {
  console.log(chalk.greenBright(
    `\n    ＴＯ ＯＰＥＮ ＳＥＣＯＮＤ ＬＯＣＫ， ＹＯＵ ＮＥＥＤ ＴＯ ＳＯＬＶＥ ＴＨＥ ＲＩＤＤＬＥＳ！`
  ));

  const riddles = {
    easy: {
      question: "ＷＨＥＮ ＷＡＳ ＪＡＶＡＳＣＲＩＰＴ ＣＲＥＡＴＥＤ?",
      choices: ["1990", "1995", "2000", "2005"],
      answer: "1995",
    },
    medium: {
      question: "ＷＨＩＣＨ ＯＦ ＴＨＥＳＥ ＩＳ Ａ ＪＡＶＡＳＣＲＩＰＴ ＦＲＡＭＥＷＯＲＫ？",
      choices: ["Django", "Rails", "Laravel", "React"],
      answer: "React",
    },
    hard: {
      question: "ＷＨＡＴ ＫＥＹＷＯＲＤ ＩＳ ＵＳＥＤ ＴＯ ＤＥＣＬＡＲＥ Ａ ＶＡＲＩＡＢＬＥ ＩＮ ＥＳ６？",
      choices: ["let", "var", "int", "float"],
      answer: "let",
    },
  };

  let currentDifficulty = "easy";

  const getNextDifficulty = () => {
    if (currentDifficulty === "easy") return "medium";
    if (currentDifficulty === "medium") return "hard";
    return "end";
  };

  const playRound = (difficulty) => {
    const { question, choices, answer } = riddles[difficulty];
    console.log(`\n${chalk.cyan(figlet.textSync(question, { font: "Small" }))}`);

    const selectedAnswer = readline.keyInSelect(
      choices,
      "ＣＨＯＳＳＥ ＹＯＵＲ ＡＮＳＷＥＲ："
    );

    if (selectedAnswer === -1) {
      console.log(chalk.yellow("Game exited."));
      return false;
    }

    if (choices[selectedAnswer] === answer) {
      console.log(chalk.green(figlet.textSync("Correct!", { font: "Cybermedium" })));
      return true;
    } else {
      console.log(
        chalk.red(`Ｗｒｏｎｇ ａｎｓｗｅｒ． Ｔｈｅ ｃｏｒｒｅｃｔ ａｎｓｗｅｒ ｗａｓ： ${answer}`)
      );
      return false;
    }
  };

  const playGame = () => {
    while (true) {
      const roundResult = playRound(currentDifficulty);
      if (!roundResult) return false; // Return false if player exits or answers incorrectly

      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") {
        console.log(
          chalk.magenta(figlet.textSync("You did it!", { font: "Cybermedium" }))
        );
        return true; // Return true when player completes all levels
      }
    }
  };

  return playGame();
};

module.exports = playLastRiddleGame;
