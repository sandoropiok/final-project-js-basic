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
      "      Ꮆᑌᕮ⟆⟆ Ƭᕼᕮ ƝᑌⲘᗷᕮᖇ ᗷᕮƬᗯᕮᕮƝ 1 ᗩƝↁ 10, Ⴤ〇ᑌ ᕼᗩ⋎ᕮ 3 ᗩƬƬᕮⲘᖘ⟆."
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
        
      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, ᗩƝↁ Ⴤ〇⋃ ᑭᖇ〇ᑕᕮᕮↁ Ƭ〇 Ƭᕼᕮ ƝᕮⲬƬ ᖇ〇〇Ⲙ...`)
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
    chalk.red("\n      Ⴤ〇⋃ Բᗩᓰしᕮↁ Ƭ〇 Ꮆ⋃ᕮ⟆⟆ Ƭᕼᕮ ƝᑌⲘᗷᕮᖇ. Ƭᕼᕮ ↁ〇〇ᖇ ᖇᕮⲘᗩᓰƝ⟆ し〇ᑕ𐌊ᕮↁ.")
  );
  return false; // Indicate failure
}

module.exports = playNumberGuessingGame;
