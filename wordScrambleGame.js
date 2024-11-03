const readline = require("readline-sync");
const chalk = require("chalk");
const figlet = require("figlet");

// Main game function that initiates and controls the flow of the Word Scramble Game
const playWordScrambleGame = () => {
  console.log(
    chalk.greenBright(
      `\n    ＴＯ ＯＰＥＮ ＦＩＲＳＴ ＬＯＣＫ， ＹＯＵ ＮＥＥＤ ＴＯ ＧＵＥＳＳ ＴＨＥ ＷＯＲＤＳ！`
    )
  );

  // Define words by difficulty level
  const words = {
    easy: ["html", "frontend", "github"],
    medium: ["function", "array", "object", "variable"],
    hard: ["javascript", "asynchronous", "algorithm", "framework", "fullstack"],
  };

  // Track the current difficulty level and the number of correct answers needed to progress
  let currentDifficulty = "easy";
  let correctAnswers = 0;

  // Helper function to scramble the letters of a word randomly
  const scrambleWord = (word) =>
    word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

  // Function to get the number of attempts allowed based on the difficulty level
  const getAttemptLimit = (difficulty) =>
    difficulty === "easy" ? 3 : difficulty === "medium" ? 2 : 1;

  // Function to determine the number of words needed to solve to progress to the next difficulty
  const getWordsToSolve = (difficulty) =>
    difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;

  // Function to handle progression between difficulty levels based on correct answers
  const getNextDifficulty = () => {
    if (correctAnswers >= getWordsToSolve(currentDifficulty)) {
      if (currentDifficulty === "easy") {
        console.log(
          chalk.yellowBright(
            `      Ꮆ尺㠪闩ㄒ 丿龱乃! 爪龱ᐯ工ƝᎶ ㄒ龱 爪㠪ᗪ工ㄩ爪 ㇄㠪ᐯ㠪㇄.`
          )
        );
        currentDifficulty = "medium";
      } else if (currentDifficulty === "medium") {
        console.log(
          chalk.green(
            `      工爪尸尺㠪丂丂工ᐯ㠪! 爪龱ᐯ工ƝᎶ ㄒ龱 廾闩尺ᗪ ㇄㠪ᐯ㠪㇄.`
          )
        );
        currentDifficulty = "hard";
      } else if (currentDifficulty === "hard") {
        console.log(
          chalk.magenta(
            `      ㄚ龱ㄩ 爪闩丂ㄒ㠪尺㠪ᗪ ㄒ廾㠪 Ꮆ闩爪㠪! ⼕龱ƝᎶ尺闩ㄒㄩ㇄闩ㄒ工龱Ɲ!`
          )
        );
        return "end"; // Successfully completed all levels
      }
      correctAnswers = 0; // Reset correct answers for next level
    }
    return currentDifficulty;
  };

  // Function that controls each round of the game, scrambling a word and handling user guesses
  const playRound = () => {
    const wordList = words[currentDifficulty];
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const scrambledWord = scrambleWord(randomWord).toUpperCase();
    let attempts = getAttemptLimit(currentDifficulty);

    // Display scrambled word with ASCII art and prompt user to guess
    console.log(
      chalk.cyan(`
      ╔═╗┌─┐┬─┐┌─┐┌┬┐┌┐ ┬  ┌─┐┌┬┐  ┬ ┬┌─┐┬─┐┌┬┐
      ╚═╗│  ├┬┘├─┤│││├┴┐│  ├┤  ││  ││││ │├┬┘ ││ •
      ╚═╝└─┘┴└─┴ ┴┴ ┴└─┘┴─┘└─┘─┴┘  └┴┘└─┘┴└──┴┘ •
        `)
    );
    console.log(
      chalk.green(figlet.textSync(` ${scrambledWord}`, { font: "Univers" }))
    );

    // Loop to process each guess, decrement attempts, and handle hints or correct guesses
    while (attempts > 0) {
      const guess = readline
        .question(
          chalk.white(
            `    ＧＵＥＳＳ ＴＨＥ ＷＯＲＤ （ｏｒ ｔｙｐｅ ＇ｈｉｎｔ＇ ｆｏｒ ｈｅｌｐ）： `
          )
        )
        .toLowerCase();

      // Check if the guess is correct
      if (guess === randomWord) {
        console.log(
          chalk.green(`
      ╔═╗┌─┐┬─┐┬─┐┌─┐┌─┐┌┬┐┬
      ║  │ │├┬┘├┬┘├┤ │   │ │
      ╚═╝└─┘┴└─┴└─└─┘└─┘ ┴ o
      ㄚ龱ㄩ丶ᐯ㠪 ㄩƝ丂⼕尺闩爪乃㇄㠪ᗪ ㄒ廾㠪 山龱尺ᗪ!
      ㄒ廾㠪 山龱尺ᗪ 山闩丂: ${chalk.bgBlack(randomWord.toUpperCase())}
            `)
        );
        correctAnswers++;
        return true; // Exit round as successful
      } else if (guess === "hint") {
        // Provide a hint, decrement attempts
        console.log(
          chalk.yellow(`          
      █░█ █ █▄░█ ▀█▀
      █▀█ █ █░▀█ ░█░ 
      ㄒ卄🝗 山ㄖ尺ᗪ 丂七闩尺七丂 山讠〸卄 '${chalk.bgWhite(
        randomWord[0].toUpperCase()
      )}' 闩Ɲᗪ 🝗Ɲᗪ丂 山讠〸卄 '${chalk.bgWhite(
            randomWord[randomWord.length - 1].toUpperCase()
          )}
          `)
        );
        attempts--; // Using a hint costs an attempt
      } else {
        // Incorrect guess, decrement attempts
        attempts--;
        console.log(
          chalk.red(`
      ╦ ╦┬─┐┌─┐┌┐┌┌─┐  ╔═╗┬ ┬┌─┐┌─┐┌─┐ 
      ║║║├┬┘│ │││││ ┬  ║ ╦│ │├┤ └─┐└─┐ 
      ╚╩╝┴└─└─┘┘└┘└─┘  ╚═╝└─┘└─┘└─┘└─┘o 
      闩ㄒㄒ㠪爪尸ㄒ丂 尺㠪爪闩工Ɲ工ƝᎶ: ${chalk.bgWhite(attempts)}`)
        );
      }

      if (attempts === 0) {
        // If attempts run out, show the correct word
        console.log(
          chalk.red(`
      ╔═╗┬ ┬┌┬┐  ╔═╗┌─┐  ╔═╗┌┬┐┌┬┐┌─┐┌┬┐┌─┐┌┬┐┌─┐┬
      ║ ║│ │ │   ║ ║├┤   ╠═╣ │  │ ├┤ │││├─┘ │ └─┐│
      ╚═╝└─┘ ┴   ╚═╝└    ╩ ╩ ┴  ┴ └─┘┴ ┴┴   ┴ └─┘o
      ㄒ廾㠪 山龱尺ᗪ 山闩丂: ${chalk.bgBlack(randomWord.toUpperCase())}`)
        );
        correctAnswers = 0;
      }
    }
    return false;
  };

  // Main game loop
  // Core game loop that progresses through levels and rounds until completion
  const playGame = () => {
    while (true) {
      const roundSuccess = playRound();
      if (!roundSuccess) break; // Stop the game if failed

      const nextDifficulty = getNextDifficulty();
      if (nextDifficulty === "end") {
        console.log(
          chalk.green(`
  ╦ ╦┌─┐┬ ┬┬  ┬┌─┐  ┌┬┐┌─┐┌─┐┌─┐┌─┐┌┬┐┌─┐┌┬┐  ┌┬┐┬ ┬┌─┐  ┌┬┐┌─┐┬─┐┬┌─┌┐┌┌─┐┌─┐┌─┐   ┬ ┬┌┐┌┬  ┌─┐┌─┐┬┌─┌─┐┌┬┐  ┌┬┐┬ ┬┌─┐  ┌─┐┬┌┐┌┌─┐┬  
  ╚╦╝│ ││ │└┐┌┘├┤    ││├┤ ├┤ ├┤ ├─┤ │ ├┤  ││   │ ├─┤├┤    ││├─┤├┬┘├┴┐│││├┤ └─┐└─┐   │ │││││  │ ││  ├┴┐├┤  ││   │ ├─┤├┤   ├┤ ││││├─┤│  
   ╩ └─┘└─┘ └┘ └─┘  ─┴┘└─┘└  └─┘┴ ┴ ┴ └─┘─┴┘   ┴ ┴ ┴└─┘  ─┴┘┴ ┴┴└─┴ ┴┘└┘└─┘└─┘└─┘┘  └─┘┘└┘┴─┘└─┘└─┘┴ ┴└─┘─┴┘   ┴ ┴ ┴└─┘  └  ┴┘└┘┴ ┴┴─┘
          ┌┬┐┌─┐┌─┐┬─┐   ┌─┐┌┐┌┌┬┐  ┌─┐┬─┐┌─┐┬  ┬┌─┐┌┐┌  ┬ ┬┌─┐┬ ┬┬─┐┌─┐┌─┐┬  ┌─┐  ┌─┐  ┌┬┐┬─┐┬ ┬┌─┐  ┌┬┐┌─┐┌─┐┌┬┐┌─┐┬─┐  
           │││ ││ │├┬┘   ├─┤│││ ││  ├─┘├┬┘│ │└┐┌┘├┤ │││  └┬┘│ ││ │├┬┘└─┐├┤ │  ├┤   ├─┤   │ ├┬┘│ │├┤   │││├─┤└─┐ │ ├┤ ├┬┘  
          ─┴┘└─┘└─┘┴└─┘  ┴ ┴┘└┘─┴┘  ┴  ┴└─└─┘ └┘ └─┘┘└┘   ┴ └─┘└─┘┴└─└─┘└─┘┴─┘└    ┴ ┴   ┴ ┴└─└─┘└─┘  ┴ ┴┴ ┴└─┘ ┴ └─┘┴└─
                                  ┌─┐┌─┐  ┌┬┐┬ ┬┌─┐  ┌┬┐┬ ┬┌┐┌┌─┐┌─┐┌─┐┌┐┌  ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┬
                                  │ │├┤    │ ├─┤├┤    │││ │││││ ┬├┤ │ ││││  ├┤ └─┐│  ├─┤├─┘├┤ │
                                  └─┘└     ┴ ┴ ┴└─┘  ─┴┘└─┘┘└┘└─┘└─┘└─┘┘└┘  └─┘└─┘└─┘┴ ┴┴  └─┘o  

     ██▒   █▓ ██▓ ▄████▄  ▄▄▄█████▓ ▒█████   ██▀███ ▓██   ██▓    ██▓  ██████    ▓██   ██▓ ▒█████   █    ██  ██▀███    ██████  ▐██▌ 
    ▓██░   █▒▓██▒▒██▀ ▀█  ▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒▒██  ██▒   ▓██▒▒██    ▒     ▒██  ██▒▒██▒  ██▒ ██  ▓██▒▓██ ▒ ██▒▒██    ▒  ▐██▌ 
     ▓██  █▒░▒██▒▒▓█    ▄ ▒ ▓██░ ▒░▒██░  ██▒▓██ ░▄█ ▒ ▒██ ██░   ▒██▒░ ▓██▄        ▒██ ██░▒██░  ██▒▓██  ▒██░▓██ ░▄█ ▒░ ▓██▄    ▐██▌ 
      ▒██ █░░░██░▒▓▓▄ ▄██▒░ ▓██▓ ░ ▒██   ██░▒██▀▀█▄   ░ ▐██▓░   ░██░  ▒   ██▒     ░ ▐██▓░▒██   ██░▓▓█  ░██░▒██▀▀█▄    ▒   ██▒ ▓██▒ 
       ▒▀█░  ░██░▒ ▓███▀ ░  ▒██▒ ░ ░ ████▓▒░░██▓ ▒██▒ ░ ██▒▓░   ░██░▒██████▒▒     ░ ██▒▓░░ ████▓▒░▒▒█████▓ ░██▓ ▒██▒▒██████▒▒ ▒▄▄  
       ░ ▐░  ░▓  ░ ░▒ ▒  ░  ▒ ░░   ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░  ██▒▒▒    ░▓  ▒ ▒▓▒ ▒ ░      ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░ ░▀▀▒ 
       ░ ░░   ▒ ░  ░  ▒       ░      ░ ▒ ▒░   ░▒ ░ ▒░▓██ ░▒░     ▒ ░░ ░▒  ░ ░    ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░   ░▒ ░ ▒░░ ░▒  ░ ░ ░  ░ 
         ░░   ▒ ░░          ░      ░ ░ ░ ▒    ░░   ░ ▒ ▒ ░░      ▒ ░░  ░  ░      ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░   ░░   ░ ░  ░  ░      ░ 
          ░   ░  ░ ░                   ░ ░     ░     ░ ░         ░        ░      ░ ░         ░ ░     ░        ░           ░   ░    
        `)
        );
        break; // End the game after completing all levels
      }
    }
  };
  playGame();
};

module.exports = playWordScrambleGame;
