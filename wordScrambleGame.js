const readline = require("readline-sync");
const chalk = require("chalk");
const figlet = require("figlet");

const playWordScrambleGame = () => {
  console.log(
    chalk.greenBright(
      `\n    ＴＯ ＯＰＥＮ ＦＩＲＳＴ ＬＯＣＫ， ＹＯＵ ＮＥＥＤ ＴＯ ＧＵＥＳＳ ＴＨＥ ＷＯＲＤＳ！`
    )
  );

  const words = {
    easy: ["html", "frontend", "github"],
    medium: ["function", "array", "object", "variable"],
    hard: ["javascript", "asynchronous", "algorithm", "framework", "fullstack"],
  };

  let currentDifficulty = "easy";
  let correctAnswers = 0;

  const scrambleWord = (word) =>
    word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

  const getAttemptLimit = (difficulty) =>
    difficulty === "easy" ? 3 : difficulty === "medium" ? 2 : 1;

  const getWordsToSolve = (difficulty) =>
    difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;

  const getNextDifficulty = () => {
    if (correctAnswers >= getWordsToSolve(currentDifficulty)) {
      if (currentDifficulty === "easy") {
        console.log(
          chalk.yellow(figlet.textSync("Level Up!", { font: "Cybermedium" }))
        );
        currentDifficulty = "medium";
      } else if (currentDifficulty === "medium") {
        console.log(
          chalk.red(figlet.textSync("Impressive!", { font: "Cybermedium" }))
        );
        currentDifficulty = "hard";
      } else if (currentDifficulty === "hard") {
        console.log(
          chalk.green(
            figlet.textSync("Congratulations!", { font: "Cybermedium" })
          )
        );
        return "end";
      }
      correctAnswers = 0;
    }
    return currentDifficulty;
  };

  const playRound = () => {
    const wordList = words[currentDifficulty];
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const scrambledWord = scrambleWord(randomWord).toUpperCase();
    let attempts = getAttemptLimit(currentDifficulty);

    console.log(
      chalk.bgCyan(figlet.textSync(`Scrambled word:`, { font: "Cyberlarge" }))
    );
    console.log(chalk.cyan(figlet.textSync(scrambledWord, { font: "Roman" })));

    while (attempts > 0) {
      const guess = readline
        .question(
          `ＧＵＥＳＳ ＴＨＥ ＷＯＲＤ （ｏｒ ｔｙｐｅ ＇ｈｉｎｔ＇ ｆｏｒ ｈｅｌｐ）： `
        )
        .toLowerCase();

      if (guess === randomWord) {
        console.log(
          chalk.green(figlet.textSync("Correct!", { font: "Cybermedium" }))
        );
        correctAnswers++;
        return true;
      } else if (guess === "hint") {
        console.log(
          chalk.yellow(
            `Hint: The word starts with '${randomWord[0].toUpperCase()}' and ends with '${randomWord[
              randomWord.length - 1
            ].toUpperCase()}'`
          )
        );
        attempts--; // Using a hint costs an attempt
      } else {
        attempts--;
        console.log(chalk.red(`Wrong guess. Attempts remaining: ${attempts}`));
      }

      if (attempts === 0) {
        console.log(
          chalk.red(
            `Out of attempts! The word was: ${randomWord.toUpperCase()}`
          )
        );
        correctAnswers = 0;
      }
    }
    return false;
  };

  const playGame = () => {
    while (true) {
      playRound();
      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") break;
    }
    console.log(chalk.magenta("Game over! Thanks for playing!"));
  };

  playGame();
};

module.exports = playWordScrambleGame;
