const readline = require("readline-sync");
const chalk = require("chalk");

const playLastRiddleGame = () => {
  console.log(
    chalk.greenBright(
      `\n    ＴＯ ＯＰＥＮ ＳＥＣＯＮＤ ＬＯＣＫ， ＹＯＵ ＮＥＥＤ ＴＯ ＳＯＬＶＥ ＴＨＥ ＲＩＤＤＬＥＳ！`
    )
  );

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

  let currentDifficulty = "easy";

  const getNextDifficulty = () => {
    if (currentDifficulty === "easy") return "medium";
    if (currentDifficulty === "medium") return "hard";
    return "end"; // No more difficulties
  };

  const playRound = (difficulty) => {
    const { question, choices, answer } = riddles[difficulty];
    console.log(`\n${chalk.cyan(question)}`);

    const selectedAnswer = readline.keyInSelect(
      choices,
      "ＣＨＯＳＳＥ ＹＯＵＲ ＡＮＳＷＥＲ："
    );

    if (selectedAnswer === -1) {
      console.log(chalk.yellow("Game exited."));
      return false; // Exit condition
    }

    if (choices[selectedAnswer] === answer) {
      console.log(chalk.green("Correct!"));
      return true; // Correct answer
    } else {
      console.log(
        chalk.red(
          `Ｗｒｏｎｇ ａｎｓｗｅｒ． Ｔｈｅ ｃｏｒｒｅｃｔ ａｎｓｗｅｒ ｗａｓ： ${answer}`
        )
      );
      return false; // Wrong answer
    }
  };

  const playGame = () => {
    while (true) {
      const roundResult = playRound(currentDifficulty);
      if (!roundResult) return false; // Return false if player exits or answers incorrectly

      currentDifficulty = getNextDifficulty();
      if (currentDifficulty === "end") {
        console.log(chalk.magenta("You did it!"));
        return true; // Return true when player completes all levels
      }
    }
  };

  const victory = playGame();
  if (victory) {
    console.log(
      chalk.green(`
 ██▒   █▓ ██▓ ▄████▄  ▄▄▄█████▓ ▒█████   ██▀███ ▓██   ██▓    ██▓  ██████    ▓██   ██▓ ▒█████   █    ██  ██▀███    ██████  ▐██▌ 
▓██░   █▒▓██▒▒██▀ ▀█  ▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒▒██  ██▒   ▓██▒▒██    ▒     ▒██  ██▒▒██▒  ██▒ ██  ▓██▒▓██ ▒ ██▒▒██    ▒  ▐██▌ 
 ▓██  █▒░▒██▒▒▓█    ▄ ▒ ▓██░ ▒░▒██░  ██▒▓██ ░▄█ ▒ ▒██ ██░   ▒██▒░ ▓██▄        ▒██ ██░▒██░  ██▒▓██  ▒██░▓██ ░▄█ ▒░ ▓██▄    ▐██▌ 
  ▒██ █░░░██░▒▓▓▄ ▄██▒░ ▓██▓ ░ ▒██   ██░▒██▀▀█▄   ░ ▐██▓░   ░██░  ▒   ██▒     ░ ▐██▓░▒██   ██░▓▓█  ░██░▒██▀▀█▄    ▒   ██▒ ▓██▒ 
   ▒▀█░  ░██░▒ ▓███▀ ░  ▒██▒ ░ ░ ████▓▒░░██▓ ▒██▒ ░ ██▒▓░   ░██░▒██████▒▒     ░ ██▒▓░░ ████▓▒░▒▒█████▓ ░██▓ ▒██▒▒██████▒▒ ▒▄▄  
   ░ ▐░  ░▓  ░ ░▒ ▒  ░  ▒ ░░   ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░  ██▒▒▒    ░▓  ▒ ▒▓▒ ▒ ░      ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░ ░▀▀▒ 
   ░ ░░   ▒ ░  ░  ▒       ░      ░ ▒ ▒░   ░▒ ░ ▒░▓██ ░▒░     ▒ ░░ ░▒  ░ ░    ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░   ░▒ ░ ▒░░ ░▒  ░ ░ ░  ░ 
     ░░   ▒ ░░          ░      ░ ░ ░ ▒    ░░   ░ ▒ ▒ ░░      ▒ ░░  ░  ░      ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░   ░░   ░ ░  ░  ░      ░ 
      ░   ░  ░ ░                   ░ ░     ░     ░ ░         ░        ░      ░ ░         ░ ░     ░        ░           ░   ░    
    
              Ｙｏｕ＇ｖｅ ｄｅｆｅａｔｅｄ ｔｈｅ ｄａｒｋｎｅｓｓ， ｕｎｌｏｃｋｅｄ ｔｈｅ ｆｉｎａｌ ｄｏｏｒ， 
              ａｎｄ ｐｒｏｖｅｎ ｙｏｕｒｓｅｌｆ ａ ｔｒｕｅ ｍａｓｔｅｒ ｏｆ ｔｈｅ ｄｕｎｇｅｏｎ ｅｓｃａｐｅ！  `)
    );
  } else {
    console.log(
      chalk.redBright(`                            
          ▄████  ▄▄▄       ███▄ ▄███▓▓█████     ▒█████   ██▒   █▓▓█████  ██▀███  
         ██▒ ▀█▒▒████▄    ▓██▒▀█▀ ██▒▓█   ▀    ▒██▒  ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
        ▒██░▄▄▄░▒██  ▀█▄  ▓██    ▓██░▒███      ▒██░  ██▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
        ░▓█  ██▓░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄    ▒██   ██░  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄  
        ░▒▓███▀▒ ▓█   ▓██▒▒██▒   ░██▒░▒████▒   ░ ████▓▒░   ▒▀█░  ░▒████▒░██▓ ▒██▒
         ░▒   ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░   ░ ▒░▒░▒░    ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
          ░   ░   ▒   ▒▒ ░░  ░      ░ ░ ░  ░     ░ ▒ ▒░    ░ ░░   ░ ░  ░  ░▒ ░ ▒░
        ░ ░   ░   ░   ▒   ░      ░      ░      ░ ░ ░ ▒       ░░     ░     ░░   ░ 
              ░       ░  ░       ░      ░  ░       ░ ░        ░     ░  ░   ░           
    `)
    );
  }
  playGame();
};

module.exports = playLastRiddleGame;
