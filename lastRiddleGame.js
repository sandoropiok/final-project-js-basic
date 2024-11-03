const readline = require("readline-sync");
const chalk = require("chalk");

// Main function that runs the riddle game
const playLastRiddleGame = () => {
  // Introduction message
  console.log(
    chalk.greenBright(
      `\n    ＴＯ ＯＰＥＮ ＳＥＣＯＮＤ ＬＯＣＫ， ＹＯＵ ＮＥＥＤ ＴＯ ＳＯＬＶＥ ＴＨＥ ＲＩＤＤＬＥＳ！`
    )
  );

  // Object containing riddle data for each difficulty level
  const riddles = {
    easy: {
      question: `
  ╦ ╦╦ ╦╔═╗╔╗╔  ╦ ╦╔═╗╔═╗   ╦╔═╗╦  ╦╔═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗  ╔═╗╦═╗╔═╗╔═╗╔╦╗╔═╗╔╦╗┌─┐
  ║║║╠═╣║╣ ║║║  ║║║╠═╣╚═╗   ║╠═╣╚╗╔╝╠═╣╚═╗║  ╠╦╝║╠═╝ ║   ║  ╠╦╝║╣ ╠═╣ ║ ║╣  ║║ ┌┘
  ╚╩╝╩ ╩╚═╝╝╚╝  ╚╩╝╩ ╩╚═╝  ╚╝╩ ╩ ╚╝ ╩ ╩╚═╝╚═╝╩╚═╩╩   ╩   ╚═╝╩╚═╚═╝╩ ╩ ╩ ╚═╝═╩╝ o `,
      choices: ["1990", "1995", "2000", "2005"],
      answer: "1995",
    },
    medium: {
      question: `
  ╦ ╦╦ ╦╦╔═╗╦ ╦  ╔═╗╔═╗  ╔╦╗╦ ╦╔═╗╔═╗╔═╗  ╦╔═╗  ╔═╗   ╦╔═╗  ╔═╗╦═╗╔═╗╔╦╗╔═╗╦ ╦╔═╗╦═╗╦╔═┌─┐
  ║║║╠═╣║║  ╠═╣  ║ ║╠╣    ║ ╠═╣║╣ ╚═╗║╣   ║╚═╗  ╠═╣   ║╚═╗  ╠╣ ╠╦╝╠═╣║║║║╣ ║║║║ ║╠╦╝╠╩╗ ┌┘
  ╚╩╝╩ ╩╩╚═╝╩ ╩  ╚═╝╚     ╩ ╩ ╩╚═╝╚═╝╚═╝  ╩╚═╝  ╩ ╩  ╚╝╚═╝  ╚  ╩╚═╩ ╩╩ ╩╚═╝╚╩╝╚═╝╩╚═╩ ╩ o `,
      choices: ["Django", "Rails", "Laravel", "React"],
      answer: "React",
    },
    hard: {
      question: `
  ╦ ╦╦ ╦╔═╗╔╦╗  ╦╔═╔═╗╦ ╦╦ ╦╔═╗╦═╗╔╦╗  ╦╔═╗  ╦ ╦╔═╗╔═╗╔╦╗  ╔╦╗╔═╗  ╔╦╗╔═╗╔═╗╦  ╔═╗╦═╗╔═╗  ╔═╗  ╦  ╦╔═╗╦═╗╦╔═╗╔╗ ╦  ╔═╗  ╦╔╗╔  ╔═╗╔═╗┏┓┌─┐
  ║║║╠═╣╠═╣ ║   ╠╩╗║╣ ╚╦╝║║║║ ║╠╦╝ ║║  ║╚═╗  ║ ║╚═╗║╣  ║║   ║ ║ ║   ║║║╣ ║  ║  ╠═╣╠╦╝║╣   ╠═╣  ╚╗╔╝╠═╣╠╦╝║╠═╣╠╩╗║  ║╣   ║║║║  ║╣ ╚═╗┣┓ ┌┘
  ╚╩╝╩ ╩╩ ╩ ╩   ╩ ╩╚═╝ ╩ ╚╩╝╚═╝╩╚══╩╝  ╩╚═╝  ╚═╝╚═╝╚═╝═╩╝   ╩ ╚═╝  ═╩╝╚═╝╚═╝╩═╝╩ ╩╩╚═╚═╝  ╩ ╩   ╚╝ ╩ ╩╩╚═╩╩ ╩╚═╝╩═╝╚═╝  ╩╝╚╝  ╚═╝╚═╝┗┛ o`,
      choices: ["let", "var", "int", "float"],
      answer: "let",
    },
  };

  let currentDifficulty = "easy"; // Start the game at "easy" difficulty

  // Function to progress to the next difficulty level
  const getNextDifficulty = () => {
    if (currentDifficulty === "easy") return "medium";
    if (currentDifficulty === "medium") return "hard";
    return "end"; // No more difficulties
  };

  // Function to play a single round with the given difficulty
  const playRound = (difficulty) => {
    const { question, choices, answer } = riddles[difficulty];
    console.log(`\n  ${chalk.cyan(question)}`);

    const selectedAnswer = readline.keyInSelect(
      choices,
      chalk.bgCyan(`ＣＨＯＳＳＥ ＹＯＵＲ ＡＮＳＷＥＲ：`)
    );

    // Check if the user chose to exit
    if (selectedAnswer === -1) {
      console.log(
        chalk.yellow(`
    █▀▀ ▄▀█ █▀▄▀█ █▀▀   █▀▀ ▀▄▀ █ ▀█▀ █▀▀ █▀▄ ░
    █▄█ █▀█ █░▀░█ ██▄   ██▄ █░█ █ ░█░ ██▄ █▄▀ ▄`)
      );
      return false; // Exit the game loop
    }

    // Check if the selected answer is correct
    if (choices[selectedAnswer] === answer) {
      console.log(
        chalk.greenBright(`
    ╔═╗┌─┐┬─┐┬─┐┌─┐┌─┐┌┬┐┬
    ║  │ │├┬┘├┬┘├┤ │   │ │
    ╚═╝└─┘┴└─┴└─└─┘└─┘ ┴ o
    ＰＲＯＣＥＥＤ ＴＯ ＮＥＸＴ ＲＯＵＮＤ`)
      );
      return true; // Proceed to next round if correct
    } else {
      console.log(
        chalk.red(`
        ╦ ╦┬─┐┌─┐┌┐┌┌─┐  ┌─┐┌┐┌┌─┐┬ ┬┌─┐┬─┐┬
        ║║║├┬┘│ │││││ ┬  ├─┤│││└─┐│││├┤ ├┬┘│
        ╚╩╝┴└─└─┘┘└┘└─┘  ┴ ┴┘└┘└─┘└┴┘└─┘┴└─o
        Ｔｈｅ ｃｏｒｒｅｃｔ ａｎｓｗｅｒ ｗａｓ： ${chalk.bgYellow(answer)}
        `)
      );
      return false; // End game if incorrect
    }
  };

  // Main game loop
  const playGame = () => {
    while (true) {
      const roundResult = playRound(currentDifficulty);
      if (!roundResult) return false; // Stop game on incorrect answer or exit

      // Move to the next difficulty level
      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") {
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
        return true; // Victory condition met
      }
    }
  };
  playGame();
};

module.exports = playLastRiddleGame;
