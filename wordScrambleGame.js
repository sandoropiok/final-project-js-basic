const readline = require("readline-sync");
const chalk = require("chalk");
const figlet = require("figlet");

function playWordScrambleGame() {
  console.log(chalk.blue(figlet.textSync("Word Scramble Game")));
  console.log(chalk.green("Welcome to the Enhanced Word Scramble Game!"));

  const words = {
    easy: ["fullstack", "frontend", "github"],
    medium: ["function", "forloop", "array", "object", "variable"],
    hard: [
      "javascript",
      "asynchronous",
      "algorithm",
      "framework",
      "randomization",
    ],
  };

  let currentDifficulty = "easy";
  let correctAnswers = 0;

  function scrambleWord(word) {
    return word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  }

  function getAttemptLimit(difficulty) {
    if (difficulty === "easy") return 1;
    if (difficulty === "medium") return 2;
    if (difficulty === "hard") return 3;
  }

  function getWordsToSolve(difficulty) {
    if (difficulty === "easy") return 1;
    if (difficulty === "medium") return 2;
    if (difficulty === "hard") return 3;
  }

  function getNextDifficulty() {
    if (
      correctAnswers >= getWordsToSolve(currentDifficulty) &&
      currentDifficulty === "easy"
    ) {
      console.log(chalk.yellow("Great job! Moving to Medium level."));
      correctAnswers = 0;
      return "medium";
    } else if (
      correctAnswers >= getWordsToSolve(currentDifficulty) &&
      currentDifficulty === "medium"
    ) {
      console.log(chalk.red("Impressive! Moving to Hard level."));
      correctAnswers = 0;
      return "hard";
    } else if (
      correctAnswers >= getWordsToSolve(currentDifficulty) &&
      currentDifficulty === "hard"
    ) {
      console.log(chalk.green("You mastered the game! Congratulations!"));
      return "end";
    }
    return currentDifficulty;
  }

  function playRound() {
    const wordList = words[currentDifficulty];
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const scrambledWord = scrambleWord(randomWord).toUpperCase();
    console.log(chalk.blue(figlet.textSync("Word Scramble Game")));
    console.log(chalk.green("Welcome to the Enhanced Word Scramble Game!"));

    const words = {
      easy: ["fullstack", "frontend", "github"],
      medium: ["function", "forloop", "array", "object", "variable"],
      hard: [
        "javascript",
        "asynchronous",
        "algorithm",
        "framework",
        "randomization",
      ],
    };

    let currentDifficulty = "easy";
    let correctAnswers = 0;

    function scrambleWord(word) {
      return word
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("");
    }

    function getAttemptLimit(difficulty) {
      if (difficulty === "easy") return 1;
      if (difficulty === "medium") return 2;
      if (difficulty === "hard") return 3;
    }

    function getWordsToSolve(difficulty) {
      if (difficulty === "easy") return 1;
      if (difficulty === "medium") return 2;
      if (difficulty === "hard") return 3;
    }

    function getNextDifficulty() {
      if (
        correctAnswers >= getWordsToSolve(currentDifficulty) &&
        currentDifficulty === "easy"
      ) {
        console.log(chalk.yellow("Great job! Moving to Medium level."));
        correctAnswers = 0;
        return "medium";
      } else if (
        correctAnswers >= getWordsToSolve(currentDifficulty) &&
        currentDifficulty === "medium"
      ) {
        console.log(chalk.red("Impressive! Moving to Hard level."));
        correctAnswers = 0;
        return "hard";
      } else if (
        correctAnswers >= getWordsToSolve(currentDifficulty) &&
        currentDifficulty === "hard"
      ) {
        console.log(chalk.green("You mastered the game! Congratulations!"));
        return "end";
      }
      return currentDifficulty;
    }

    function playRound() {
      const wordList = words[currentDifficulty];
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      const scrambledWord = scrambleWord(randomWord).toUpperCase();

      console.log(`\nScrambled word: ${chalk.cyan(scrambledWord)}`);
      let attempts = getAttemptLimit(currentDifficulty);

      while (attempts > 0) {
        const guess = readline
          .question("Guess the word (or type 'hint' for help): ")
          .toLowerCase();

        if (guess === randomWord) {
          console.log(chalk.green("Correct! You've unscrambled the word!"));
          correctAnswers++;
          return;
        } else if (guess === "hint") {
          console.log(
            chalk.yellow(
              `Hint: The word starts with '${randomWord[0].toUpperCase()}' and ends with '${randomWord[
                randomWord.length - 1
              ].toUpperCase()}'`
            )
          );
          attempts--; // Hints cost an attempt
        } else {
          attempts--;
          console.log(
            chalk.red(`Wrong guess. Attempts remaining: ${attempts}`)
          );
        }

        if (attempts === 0) {
          console.log(
            chalk.red(
              `Out of attempts! The word was: ${randomWord.toUpperCase()}`
            )
          );
          correctAnswers = 0; // Reset correct answers on failure
        }
      }
    }

    function playGame() {
      while (true) {
        playRound();
        currentDifficulty = getNextDifficulty();
        if (currentDifficulty === "end") break;
      }

      console.log(chalk.magenta("Game over! Thanks for playing!"));
    }

    console.log(`\nScrambled word: ${chalk.cyan(scrambledWord)}`);
    let attempts = getAttemptLimit(currentDifficulty);

    while (attempts > 0) {
      const guess = readline
        .question("Guess the word (or type 'hint' for help): ")
        .toLowerCase();

      if (guess === randomWord) {
        console.log(chalk.green("Correct! You've unscrambled the word!"));
        correctAnswers++;
        return;
      } else if (guess === "hint") {
        console.log(
          chalk.yellow(
            `Hint: The word starts with '${randomWord[0].toUpperCase()}' and ends with '${randomWord[
              randomWord.length - 1
            ].toUpperCase()}'`
          )
        );
        attempts--; // Hints cost an attempt
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
        correctAnswers = 0; // Reset correct answers on failure
      }
    }
  }

  function playGame() {
    while (true) {
      playRound();
      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") break;
    }

    console.log(chalk.magenta("Game over! Thanks for playing!"));
  }
}

module.exports = playWordScrambleGame;
