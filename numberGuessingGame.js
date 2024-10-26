// numberGuessingGame.js
const readlineSync = require("readline-sync");
const chalk = require("chalk");

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

  console.log(chalk.greenBright(doorArt));
  console.log(
    chalk.blueBright(
      "      Gᥙҽടട 𝜏ԋҽ ɳᥙⲙßҽɾ ßҽ𝜏ɯҽҽɳ 1 αɳԃ 10 𝜏σ σρҽɳ 𝜏ԋҽ ԃσσɾ, ყσᥙ ԋαʋҽ 3 α𝜏𝜏ҽⲙρ𝜏ട."
    )
  );

  const targetNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly && attempts < 3) {
    const guess = readlineSync.questionInt(
      chalk.magenta("\n      ᕮƝƬᕮᖇ Ⴤ〇⋃ᖇ Ꮆᑌᕮ⟆⟆: ")
    );
    attempts++;

    if (guess === targetNumber) {
      console.log(
        chalk.green(`  
        ▒█▀▀█ █▀▀█ █▀▀█ █▀▀█ █▀▀ █▀▀ ▀▀█▀▀ █ 
        ▒█░░░ █░░█ █▄▄▀ █▄▄▀ █▀▀ █░░ ░░█░░ █ 
        ▒█▄▄█ ▀▀▀▀ ▀░▀▀ ▀░▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▄
     
      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, ᗩƝↁ Ⴤ〇⋃ ᑭᖇ〇ᑕᕮᕮↁ Ƭ〇 Ƭᕼᕮ ƝᕮⲬƬ ↁ〇〇ᖇ...`)
      );
      guessedCorrectly = true;
      return true; // Indicate success
    } else if (guess < targetNumber) {
      console.log(chalk.bold.red("\n      Ƭ〇〇 し〇ᗯ❗ ƬᖇႸ ᎯɢᎯ⫯ﬡ."));
    } else {
      console.log(chalk.bold.red("\n      Ƭ〇〇 ᕼᓮᎶᕼ❗ ƬᖇႸ ᎯɢᎯ⫯ﬡ."));
    }
  }

  if (!guessedCorrectly) {
    console.log(
      chalk.red(`    
        ██████████████████████████████████▀█████
        █▄─█▀▀▀█─▄█▄─▄▄▀█─▄▄─█▄─▀█▄─▄█─▄▄▄▄█████
        ██─█─█─█─███─▄─▄█─██─██─█▄▀─██─██▄─█░░██
        ▀▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▀▄▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▄▄▀▀

      Ƭᕼᕮ ↁ〇〇ᖇ ᖇᕮⲘᗩᓰƝ⟆ し〇ᑕ𐌊ᕮᗪ.`)
    );
  }
  console.log(
    chalk.red("\nYou failed to guess the number. The door remains locked.")
  );
  return false; // Indicate failure
}

module.exports = playNumberGuessingGame;
