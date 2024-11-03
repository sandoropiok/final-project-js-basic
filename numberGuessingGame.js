const readlineSync = require("readline-sync");
const chalk = require("chalk");

const playNumberGuessingGame = () => {
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

  console.log(chalk.greenBright(doorArt)); // Displaying the door art in bright green
  console.log(
    chalk.blueBright(
      "      Ꮆᑌᕮ⟆⟆ Ƭᕼᕮ ƝᑌⲘᗷᕮᖇ ᗷᕮƬᗯᕮᕮƝ 1 ᗩƝↁ 10, Ⴤ〇ᑌ ᕼᗩ⋎ᕮ 3 ᗩƬƬᕮⲘᖘ⟆."
    )
  );

  const targetNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let attempts = 0; // Initialize attempts counter
  let guessedCorrectly = false; // Initialize guessedCorrectly flag to check if user guessed correctly

  // Main game loop: continues until user guesses correctly or runs out of attempts
  while (!guessedCorrectly && attempts < 3) {
    const guess = readlineSync.questionInt(
      chalk.magenta("\n      ᕮƝƬᕮᖇ Ⴤ〇⋃ᖇ Ꮆᑌᕮ⟆⟆: ")
    ); // Prompt user for their guess
    attempts++; // Increment attempts after each guess


    if (guess === targetNumber) {
      // If the user guessed the target number
      console.log(
        chalk.green(`  
            ▒█▀▀█ █▀▀█ █▀▀█ █▀▀█ █▀▀ █▀▀ ▀▀█▀▀ █ 
            ▒█░░░ █░░█ █▄▄▀ █▄▄▀ █▀▀ █░░ ░░█░░ █ 
            ▒█▄▄█ ▀▀▀▀ ▀░▀▀ ▀░▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▄
        
      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, ᗩƝↁ Ⴤ〇⋃ ᑭᖇ〇ᑕᕮᕮↁ Ƭ〇 Ƭᕼᕮ ƝᕮⲬƬ ᖇ〇〇Ⲙ...`)
      );
      guessedCorrectly = true; // Set flag to true indicating the user won
      return true; // Indicate success
    } else if (guess < targetNumber) { 
      // If guess is lower than target
      console.log(chalk.bold.red("\n      Ƭ〇〇 し〇ᗯ❗ ƬᖇႸ ᎯɢᎯ⫯ﬡ."));
    } else { 
      // If guess is higher than target
      console.log(chalk.bold.red("\n      Ƭ〇〇 ᕼᓮᎶᕼ❗ ƬᖇႸ ᎯɢᎯ⫯ﬡ."));
    }
  }
  // If user failed to guess correctly within 3 attempts
  if (!guessedCorrectly) {
    console.log(
      chalk.redBright(`    
          ██████████████████████████████████▀█████
          █▄─█▀▀▀█─▄█▄─▄▄▀█─▄▄─█▄─▀█▄─▄█─▄▄▄▄█████
          ██─█─█─█─███─▄─▄█─██─██─█▄▀─██─██▄─█░░██
          ▀▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▀▄▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▄▄▀▀

      Ƭᕼᕮ ↁ〇〇ᖇ ᖇᕮⲘᗩᓰƝ⟆ し〇ᑕ𐌊ᕮᗪ.`)
    );
  }
  console.log(
    chalk.red(
      "\n      Ⴤ〇⋃ Բᗩᓰしᕮↁ Ƭ〇 Ꮆ⋃ᕮ⟆⟆ Ƭᕼᕮ ƝᑌⲘᗷᕮᖇ. Ƭᕼᕮ ↁ〇〇ᖇ ᖇᕮⲘᗩᓰƝ⟆ し〇ᑕ𐌊ᕮↁ."
    )
  );
  return false; // Indicate failure
}

module.exports = playNumberGuessingGame; // Export the function for use in other files
