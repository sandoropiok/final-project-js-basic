// numberGuessingGame.js
const readlineSync = require('readline-sync');
const chalk = require('chalk');

function playNumberGuessingGame() {
  // Display the room with an ASCII art representation of the left door
  let doorArt = `
      |████████████████████████████████████████████████████████████████████████████████████|      
      |█████████                                                                   ████████|      
      |█████████ ╔╦╗┬ ┬┬┌─┐  ┌┬┐┌─┐┌─┐┬─┐  ┬ ┬┬┬  ┬    ┌─┐┌┐┌┬ ┬ ┬  ┌─┐┌─┐┌─┐┌┐┌   ████████|      
      |█████████  ║ ├─┤│└─┐   │││ ││ │├┬┘  │││││  │    │ │││││ └┬┘  │ │├─┘├┤ │││   ████████|      
      |█████████  ╩ ┴ ┴┴└─┘  ─┴┘└─┘└─┘┴└─  └┴┘┴┴─┘┴─┘  └─┘┘└┘┴─┘┴   └─┘┴  └─┘┘└┘   ████████|      
      |█████████                                                                   ████████|      
      |█████████  ┬┌─┐  ┬ ┬┌─┐┬ ┬  ┌─┐┬ ┬┌─┐┌─┐┌─┐  ┌┬┐┬ ┬┌─┐  ┌┐┌┬ ┬┌┬┐┌┐ ┌─┐┬─┐  ████████|      
      |█████████  │├┤   └┬┘│ ││ │  │ ┬│ │├┤ └─┐└─┐   │ ├─┤├┤   ││││ ││││├┴┐├┤ ├┬┘  ████████|      
      |█████████  ┴└     ┴ └─┘└─┘  └─┘└─┘└─┘└─┘└─┘   ┴ ┴ ┴└─┘  ┘└┘└─┘┴ ┴└─┘└─┘┴└─o ████████|      
      |█████████                                                                   ████████|      
      |████████████████████████████████████████████████████████████████████████████████████|
  `;

  console.log(chalk.blueBright("\n      Gᥙҽടട 𝜏ԋҽ ɳᥙⲙßҽɾ ßҽ𝜏ɯҽҽɳ 1 αɳԃ 10 𝜏σ σρҽɳ 𝜏ԋҽ ԃσσɾ, ყσᥙ ԋαʋҽ 3 α𝜏𝜏ҽⲙρ𝜏ട."));
  console.log(chalk.greenBright(doorArt));


  const targetNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly && attempts < 3) {
    const guess = readlineSync.questionInt(chalk.magenta("\n      Ɛɳ𝜏ҽɾ ყσᥙɾ ցᥙҽടട: "));
    attempts++;

    if (guess === targetNumber) {
      console.log(chalk.green("      Cσɾɾҽ𝛓𝜏! ㆜ԋҽ ԃσσɾ ᥙɳɬσ𝛓ƙട, αɳԃ ყσᥙ ρɾσ𝛓ҽҽԃ 𝜏σ 𝜏ԋҽ ɳҽχ𝜏 ɾσσⲙ..."));
      guessedCorrectly = true;
      // Add code here to proceed to the next part of the dungeon if needed
    } else if (guess < targetNumber) {
      console.log(chalk.red("      ㆜OO ⳐOᗯ! ㆜ɾყ αցαιɳ."));
    } else {
      console.log(chalk.red("      ㆜OO ԊｴGԨ! ㆜ɾყ αցαιɳ."));
    }
  }

  if (!guessedCorrectly) {
    console.log(chalk.red("      ᗯᏒOƝG. ㆜ԋҽ ԃσσɾ ɾҽⲙαιɳട ɬσ𝛓ƙҽԃ."));
    // Add any additional consequence or option to retry, if desired
  }
}

module.exports = playNumberGuessingGame;