// Required Libraries
const readline = require("readline-sync"); // Library for synchronous user input
const figlet = require("figlet"); // Library for generating ASCII art text
const chalk = require("chalk"); // Library for colorful text output
const { Select } = require("enquirer"); // Enquirer package for interactive prompts

// Import game functions from external files
const playNumberGuessingGame = require("./numberGuessingGame"); // Number guessing game
const riddleChallenge = require("./riddleChallenge"); // Riddle challenge
const playRockPaperScissors = require("./rockPaperScissorsGame"); // Rock-paper-scissors game
const playTicTacToe = require("./ticTacToeGame"); // Tic-tac-toe game
const playWordScrambleGame = require("./wordScrambleGame"); // Word scramble game
const playLastRiddleGame = require("./lastRiddleGame"); // Last riddle game

// Display a welcome message with ASCII art, using chalk for color and figlet for styling
console.log(
  chalk.redBright(`
          ▄   ▄   ▄▄▄ ▒█        ▄▄▄  ▄▄▄▄    ▄▄▄      █     ▄▄▄  
         ▒█ ▄░█ ░█  ▒▌▒█ ▒▓▀▀▘░█  ▒█▒▓▌▓▌▓▌░█  ▒▌  ▄▄▄█▄▄▖░█  ▒█ 
         ▒█▒█░█ ▒█▀▀▀ ▒█ ▒▓▄▄▖░▒▄▄▄▛▒▓▌░▒▓▌▒█▀▀▀   ░░▒█  ░░▒▄▄▄▛ 
         ░▒▀ ▀  ░▒▀▀▀ ▓█ ░▒░░  ▒░  ░▒░  ▒░ ▒▓▀▀▀ ░  ░▒█  ░ ░▒░░
          ░  ░   ░    ░   ░  ░ ░    ░░  ░   ▒░      ░▒█  ░  ░░  
                          ░         ░       ░        ░▒     ░
  ▓█████   ██████  ▄████▄ ░ ▄▄▄  ░    ██▓███  ▓█████  ░ ▄▄▄█████▓ ██░ ██ ▓█████           
  ▓█   ▀ ▒██    ▒ ▒██▀ ▀█  ▒████▄    ▓██░  ██▒▓█   ▀  ░ ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀           
  ▒███   ░ ▓██▄   ▒▓█    ▄ ▒██  ▀█▄  ▓██░ ██▓▒▒███      ▒ ▓██░ ▒░▒██▀▀██░▒███             
  ▒▓█  ▄   ▒   ██▒▒▓▓▄ ▄██▒░██▄▄▄▄██ ▒██▄█▓▒ ▒▒▓█  ▄    ░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄           
  ░▒████▒▒██████▒▒▒ ▓███▀ ░ ▓█   ▓██▒▒██▒ ░  ░░▒████▒ ░   ▒██▒ ░ ░▓█▒░██▓░▒████▒          
  ░░ ▒░ ░▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░ ▒▒   ▓▒█░▒▓▒░ ░  ░░░ ▒░ ░     ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░          
   ░ ░  ░░ ░▒  ░ ░  ░  ▒     ▒   ▒▒ ░░▒ ░      ░ ░  ░ ░     ░     ▒ ░▒░ ░ ░ ░  ░          
     ░   ░  ░  ░  ░          ░   ▒   ░░          ░        ░       ░  ░░ ░   ░             
     ░  ░      ░  ░ ░            ░  ░            ░  ░             ░  ░  ░   ░  ░                                                                       
      ▓█████▄  █  ░ ██  ███▄    █   ▄████ ▓█████  ▒█████   ███▄    █  ▐██▌
      ▒██▀ ██▌ ██  ▓██▒ ██ ▀█   █  ██▒ ▀█▒▓█   ▀ ▒██▒  ██▒ ██ ▀█   █  ▐██▌
      ░██   █▌▓██  ▒██░▓██  ▀█ ██▒▒██░▄▄▄░▒███   ▒██░  ██▒▓██  ▀█ ██▒ ▐██▌
      ░▓█▄   ▌▓▓█  ░██░▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄ ▒██   ██░▓██▒  ▐▌██▒ ▓██▒
      ░▒████▓ ▒▒█████▓ ▒██░   ▓██░░▒▓███▀▒░▒████▒░ ████▓▒░▒██░   ▓██░ ▒▄▄ 
       ▒▒▓  ▒ ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒  ░▒   ▒ ░░ ▒░ ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ░▀▀▒
       ░ ▒  ▒ ░░▒░ ░ ░ ░ ░░   ░ ▒░  ░   ░  ░ ░  ░  ░ ▒ ▒░ ░ ░░   ░ ▒░ ░  ░
       ░ ░  ░  ░░░ ░ ░    ░   ░ ░ ░ ░   ░    ░   ░ ░ ░ ▒     ░   ░ ░     ░
         ░       ░              ░       ░    ░  ░    ░ ░           ░  ░   
       ░                ░            ░                      ░            ░ 
`)
);

// Game Introduction with Storyline
console.log(
  chalk.greenBright(`
   ____________________________________________________________________  
  / \\                                                                  \\
 |   |                                                                  |
  \\__|     Ⴤσᥙ ⨍ιɳԃ ყσᥙɾ⟆ҽɬ⨍ 𝜏ɾαρρҽԃ ιɳ α ԃαɾƙ, ⲙყ⟆𝜏ҽɾισᥙ⟆ ԃᥙɳցҽσɳ      |
     |     ⨍ιɬɬҽԃ ɯι𝜏ԋ ɾιԃԃɬҽ⟆, ɬσցι𝛓 ρᥙⲍⲍɬҽ⟆, αɳԃ ɬσ𝛓ƙҽԃ ԃσσɾ⟆.        |
     |     ㆜ԋҽ σɳɬყ ɯαყ σᥙ𝜏 ι⟆ 𝜏σ ടσɬʋҽ 𝜏ԋҽ 𝛓ԋαɬɬҽɳցҽ⟆ ყσᥙ ҽɳ𝛓σᥙɳ𝜏ҽɾ.  |
     |     Cԋσσ⟆ҽ ɯι⟆ҽɬყ, αɳԃ ρҽɾԋαρട ყσᥙ'ɬɬ ҽ⟆𝛓αρҽ...                  |
     |     Ƒαιɬ, αɳԃ ყσᥙ'ɬɬ ßҽ 𝜏ɾαρρҽԃ ⨍σɾҽʋҽɾ.                         |
     |                                                                  | 
     |     Уσᥙɾ ʝσᥙɾɳҽყ ßҽցιɳട ɳσɯ. ᗯιɬɬ ყσᥙ ടᥙɾʋιʋҽ 𝜏ԋҽ ԃᥙɳցҽσɳ'ട      |
     |     𝜏ɯιട𝜏ҽԃ 𝜏ɾιαɬട?                                              |
     |                                                                  |
     |   _______________________________________________________________|__
     \\_/__________________________________________________________________/ 
`)
);

// Prompt for the player's username
let username = readline.question(
  chalk.bgCyan(
    `      山廾闩ㄒ 工丂 ㄚ龱ㄩ尺 Ɲ闩爪㠪⸝ 乃尺闩ᐯ㠪 闩ᗪᐯ㠪Ɲㄒㄩ尺㠪尺 ❔`
  )
);

// Display personalized welcome message
console.log(
  chalk.yellowBright(
    figlet.textSync(`\nWelcome, ${username.toUpperCase()}`, {
      font: "Double", // ASCII font style
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 180,
      whitespaceBreak: true,
    })
  )
);

// Function to display a room with two doors and prompt the player to choose
const showTwoDoorsRoom = () => {
  let roomArt = `
     \\                                                               /
      \\                                                             /
       \\ _________________________________________________________ /
        |     -_-                                             _-  |
        |_-_- _                                         -_- _-   -|
        |          LEFT             _-  _--       ＲＥＩＧＨＴ    |
        |      _____________         ,         _____________      |
        |     / /███████████\\        (        / /███████████\\     |
        |    / /█████████████\\       )       / /█████████████\\    |
        |   / /███████████████\\     'U'     / /███████████████\\   |
        |  /  |████▌▓▓▓▓▓▓▐████\\ o   T   o /  |████▌▓▓▓▓▓▓▐████\\  |
        |  |  |████▌▓▓▓▓▓▓▐████|  .  |  .  |  |████▌▓▓▓▓▓▓▐████|  |
        |  |  |████████████████|   . | .   |  |████████████████|  |
        |  |  |█▌#▐████████████|    .|.    |  |█▌#▐████████████|  |
        |  |  |████████████████|     |     |  |████████████████|  |
        |  |  |████████████████|     !     |  |████████████████|  |
        |  |  |████████████████|        -  |  |████████████████|  |
        |  |  |████████████████|        -  |  |████████████████|  |
        |  |  |████████████████|        -  |  |████████████████|  |
        |  | /__--    __-- _   |   _- _ -  | /__--    __-- _   |  |
        |__|/__________________|___________|/__________________|__|
       /                                             _ -           \\
      /   -_- _ -             _- _---                       -_-  -_ \\
     /             __-                         _- _---               \\
`;

  console.log(chalk.greenBright(roomArt));
  console.log(
    chalk.greenBright(`
┓┏     ┏•   ┓            ┓┏ •       ┓•   ┓                • ┓          ┓        
┗┫┏┓┓┏ ╋┓┏┓┏┫ ┓┏┏┓┓┏┏┓┏┏┓┃╋ ┓┏┓ ┏┓ ┏┫┓┏┳┓┃┓┏ ┏┓┏┓┏┓┏┳┓ ┓┏┏┓╋┣┓ ╋┓┏┏┏┓ ┏┫┏┓┏┓┏┓┏•
┗┛┗┛┗┻ ┛┗┛┗┗┻ ┗┫┗┛┗┻┛ ┛┗ ┗┛ ┗┛┗ ┗┻ ┗┻┗┛┗┗┗┗┫ ┛ ┗┛┗┛┛┗┗ ┗┻┛┗┗┛┗ ┗┗┻┛┗┛ ┗┻┗┛┗┛┛ ┛•
               ┛                           ┛                                    
  `)
  );
};

// Function to prompt the player to choose a direction using enquirer
const firstRoom = () => {
  const prompt = new Select({
    name: "firstRoomChoice", // Name of the prompt, used for identification
    message: chalk.bgCyan(
      `  !!! 👀 ＣＨＯＯＳＥ ＬＥＦＴ ＯＲ ＲＩＧＨＴ ＤＯＯＲ 👀 ！！！\n`
    ), // Message displayed to the user
    choices: ["  ＬＥＦＴ ＤＯＯＲ", "  ＲＩＧＨＴ ＤＯＯＲ"], // Options available to the user
  });
  // Run the prompt and handle the user's choice
  prompt
    .run()
    .then((answer) => {
      // Check which lock the user chose
      if (answer === "  ＬＥＦＴ ＤＯＯＲ") {
        console.log(
          chalk.cyanBright(
            `\n   ＴＨＥＲＥ＇Ｓ Ａ ＮＯＴＥ ＯＮ ＴＨＥ ＤＯＯＲ： ＴＯ ＯＰＥＮ ＴＨＩＳ ＤＯＯＲ， 
   ＹＯＵ ＮＥＥＤ ＴＯ ＧＵＥＳＳ ＴＨＥ ＣＯＲＲＥＣＴ ＮＵＭＢＥＲ．．．`
          )
        );
        const success = playNumberGuessingGame(); // Call the number guessing for the Left door
        if (success) {
          secondRoom(); // Proceed to the next room on success
        } else {
          console.log(
            chalk.yellow(`
        ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
         ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
         ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
        `)
          );
          firstRoom(); // Retry if the player fails
        }
      } else if (answer === "  ＲＩＧＨＴ ＤＯＯＲ") {
        console.log(
          chalk.cyanBright(
            `\n   ＴＨＥＲＥ＇Ｓ Ａ ＲＩＤＤＬＥ ＯＮ ＴＨＥ ＤＯＯＲ： ＴＯ ＯＰＥＮ ＴＨＩＳ ＤＯＯＲ， 
   ＡＮＳＷＥＲ ＴＨＥ ＦＯＬＬＯＷＩＮＧ．．．`
          )
        );
        const success = riddleChallenge(); // Call the riddle challenge for the Right door
        if (success) {
          secondRoom(); // Proceed to the next room on success
        } else {
          console.log(
            chalk.yellow(`
        ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
         ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
         ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
        `)
          );
          firstRoom(); // Retry if the player fails
        }
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the prompt
      console.log(chalk.red("Ｅｒｒｏｒ ｗｉｔｈ ｅｎｑｕｉｒｅｒ：", error));
    });
};

// Placeholder function for the second room with two doors
const secondRoom = () => {
  let nextRoomArt = `
     \\                                                                /
      \\                                                              /
       \\ __________________________________________________________ /
        |____|____|____|____|____|____|____|____|____|____|____|___|
        |__|____|____|____|____|____|____|____|____|____|____|___|_|
        |____|____|____|____|____|____|____|____|____|____|____|___|
        |__|____|____|____|____|____|____|____|____|____|____|___|_|
        |____|__/\\__________/\\___|____|____|__/\\__________/\\___|___|
        |__|___/ /;  ;  !  :\\ \\|___|_____|___/ /;  ;  ,  :\\ \\____|_|
        |_____/_/ :  !  :  . \\_\\______|_____/_/ :  '  :  . \\_\\_____|
        |__|_| |  :  :  '  ;  | |__|_____|_| |  !  ;  :  ,  | |__|_|
        |____| |  ;  ;__:  ;  | |_____|____| |  ;  '__:  ;  | |____|
        |__|_| |  .  :)(.  !  | |__|_____|_| |  .  :)(.  !  | |__|_|
        |____| |  !  (##)  _  | |_____|____| |  '  (##)  _  | |____|
        |__|_| |  :  ;""  (_) | |__|_____|_| |  :  ;""  (_) | |__|_|
        |____| |  :  :  .  ;  | |_____|____| |  :  :  .  ,  | |____|
        |__|_| |  !  ,  ;  ;  | |__|_____|_| |  !  ,  ;  ;  | |__|_|
        |____| |  .  .  :  :  | |_____|____| |  .  .  :  :  | |____|
        |__|_| |  .  ,  :  .  | |__|_____|_| |  .  '  :  .  | |__|_|
        |____| |__:__!__:__;__| |_____|____| |__:__!__;__;__| |____|
        |__|_|/________________\\|__|_____|_|/________________\\|__|_|
       /_--__      _- __-- -                __-       _ -           \\
      /   -_- _ -              _- _---     -__--_            -_-  -__\\
     / _-           __-               _-__-       _- _---        -_   \\
`;
  console.log(chalk.greenBright(nextRoomArt));
  console.log(
    chalk.greenBright(`
┏┳┓┓┏┳┏┓  ┳┏┓  ┏┳┓┓┏┏┓  ┳┓┏┓┏┓┏┓┏┳┓  ┳┓┏┓┏┓┳┳┓  ┓ ┏┳┏┳┓┓┏  ┏┳┓┓ ┏┏┓  ┳┓┏┓┏┓┳┓┏┓╻
 ┃ ┣┫┃┗┓  ┃┗┓   ┃ ┣┫┣   ┃┃┣  ┃┃  ┃   ┣┫┃┃┃┃┃┃┃  ┃┃┃┃ ┃ ┣┫   ┃ ┃┃┃┃┃  ┃┃┃┃┃┃┣┫┗┓┃
 ┻ ┛┗┻┗┛  ┻┗┛   ┻ ┛┗┗┛  ┛┗┗┛┗┛┗┛ ┻   ┛┗┗┛┗┛┛ ┗  ┗┻┛┻ ┻ ┛┗   ┻ ┗┻┛┗┛  ┻┛┗┛┗┛┛┗┗┛•
                                                                                
`)
  );

  // Function to prompt the player to choose a direction using enquirer
  const prompt = new Select({
    name: "secondRoomChoice", // Name of the prompt, used for identification
    message: chalk.bgCyan(
      `  ＣＨＯＯＳＥ ＷＥＳＴ ＯＲ ＥＡＳＴ ＤＯＯＲ ！！！\n`
    ), // Message displayed to the user
    choices: ["  ＷＥＳＴ ＤＯＯＲ", "  ＥＡＳＴ ＤＯＯＲ"], // Options available to the user
  });
  // Run the prompt and handle the user's choice
  prompt
    .run()
    .then((answer) => {
      // Check which lock the user chose
      if (answer === "  ＷＥＳＴ ＤＯＯＲ") {
        console.log(
          chalk.green(
            `\n  ＹＯＵ ＵＮＬＯＣＫ ＴＨＥ ＷＥＳＴ ＤＯＯＲ ＡＮＤ ＭＯＶＥ ＴＯ 
   ✊🤚✌️ ＲＯＣＫ， ＰＡＰＥＲ， ＳＣＩＳＳＯＲＳ ＧＡＭＥ ✊🤚✌️．．．`
          )
        );
        playRockPaperScissors()
          .then((success) => {
            if (success) {
              thirdRoom(); // Call the next room
            } else {
              console.log(
                chalk.yellow(`
          ╦  ╔═╗╔═╗╔╦╗  ╔═╗╦ ╦╔═╗╔╗╔╔═╗╔═╗
          ║  ╠═╣╚═╗ ║   ║  ╠═╣╠═╣║║║║  ║╣ 
          ╩═╝╩ ╩╚═╝ ╩   ╚═╝╩ ╩╩ ╩╝╚╝╚═╝╚═╝

        ƬᖇჄ ᕮᗩ⟆Ƭ ᗪ〇〇ᖇ❗❗❗
            `)
              );
              secondRoom();
            }
          })
          .catch((error) =>
            // Handle any errors that occur during the prompt
            console.log(chalk.red("Ｇａｍｅ ｅｒｒｏｒ：", error))
          );
      } else if (answer === "  ＥＡＳＴ ＤＯＯＲ") {
        console.log(
          chalk.green(
            `\n  ＹＯＵ ＵＮＬＯＣＫ ＴＨＥ ＥＡＳＴ ＤＯＯＲ ＡＮＤ ＭＯＶＥ 
   ＴＯ ＴＩＣ－ＴＡＣ－ＴＯＥ ＧＡＭＥ．．．`
          )
        );
        playTicTacToe()
          .then((success) => {
            if (success) {
              thirdRoom(); // Call the next room
            } else {
              console.log(
                chalk.yellow(`
    ╦  ╔═╗╔═╗╔╦╗  ╔═╗╦ ╦╔═╗╔╗╔╔═╗╔═╗
    ║  ╠═╣╚═╗ ║   ║  ╠═╣╠═╣║║║║  ║╣ 
    ╩═╝╩ ╩╚═╝ ╩   ╚═╝╩ ╩╩ ╩╝╚╝╚═╝╚═╝
    
  ƬᖇჄ ᗯᕮ⟆Ƭ ↁ〇〇ᖇ❗❗❗
          `)
              );
              secondRoom();
            }
          })
          .catch((error) =>
            // Handle any errors that occur during the prompt
            console.log(chalk.red("Ｇａｍｅ ｅｒｒｏｒ：", error))
          );
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the prompt
      console.log(chalk.red("Ｅｒｒｏｒ ｗｉｔｈ ｅｎｑｕｉｒｅｒ：", error));
    });
};

// Function to display a room with door with two locks and prompt the player to choose
const thirdRoom = () => {
  let lastRoomArt = `
     \\                                                               /
      \\                                                             /
       \\ _________________________________________________________ /
        |   ______ __       __   __ _     _ ___      _      _  __ |
        | _   ___  _      _________________________    _ __   __ _|
        |   ____ _   ___|\\ _ _ _ _ _ _ _ _ _ _ _ /|__        _  __|
        | _      _ __ _ | |* * * * * * * * * * *| |   ___ _       |
        |   ____ _     _| |*   _ _ _ _ _ _ _   *| |___  _        _|
        |  __      _  __| |*  | | | | | | | |  *| |   __       _ _|
        |_ __      __   | |*  |-+-+-+-+-+-+-|  *| | _  __         |
        |     __     ___| |*  |-+-+-+-+-+-+-|  *| | __   _    ____|
        |     ___ _    _| |*  |_|_|_|_|_|_|_|  *| |__          __ |
        |____      __   | |*   _           _   *| |     ___ _     |
        |   _      _ __ | |*  |%|         {%}  *| | _  _       ___|
        |  ___ __       | |*  (*)         [#]  *| |__             |
        | _          ___| |*   "           "   *| |    _ ___     _|
        |_   ___  __ _  | |*                   *| |        __     |
        | ____     _ _  | |*                   *| | _ ___         |
        | _ _____      _| |*                   *| |       _    ___|
        |__ _        __ | |*_*_*_*_*_*_*_*_*_*_*| |  _     __ _   |
        |_______________|/_______________________\\|_______________|
       /                                                           \\
      /                                                             \\
     /                                                               \\
`;
  console.log(chalk.greenBright(lastRoomArt));
  console.log(
    chalk.greenBright(`
    ┏┳┓┓┏┏┓  ┓ ┏┓┏┓┏┳┓  ┳┓┏┓┏┓┳┓  ┓ ┏┳┏┳┓┓┏  ┏┳┓┓ ┏┏┓  ┓ ┏┓┏┓┓┏┓┏┓╻╻╻
     ┃ ┣┫┣   ┃ ┣┫┗┓ ┃   ┃┃┃┃┃┃┣┫  ┃┃┃┃ ┃ ┣┫   ┃ ┃┃┃┃┃  ┃ ┃┃┃ ┃┫ ┗┓┃┃┃
     ┻ ┛┗┗┛  ┗┛┛┗┗┛ ┻   ┻┛┗┛┗┛┛┗  ┗┻┛┻ ┻ ┛┗   ┻ ┗┻┛┗┛  ┗┛┗┛┗┛┛┗┛┗┛•••   
`)
  );

  // Function to prompt the player to choose a direction using enquirer
  const prompt = new Select({
    name: "thirdRoomChoice", // Name of the prompt, used for identification
    message: chalk.bgCyan(
      `  ＣＨＯＯＳＥ ＦＩＲＳＴ  ＯＲ ＳＥＣＯＮＤ ＤＯＯＲ ＬＯＣＫ ！！！\n`
    ), // Message displayed to the user
    choices: ["  ＦＩＲＳＴ ＬＯＣＫ", "  ＳＥＣＯＮＤ ＬＯＣＫ"], // Options available to the user
  });
  // Run the prompt and handle the user's choice
  prompt
    .run()
    .then((answer) => {
      // Check which lock the user chose
      if (answer === "  ＦＩＲＳＴ ＬＯＣＫ") {
        console.log(
          chalk.yellowBright(
            `\n    ＹＯＵ ＣＨＯＯＳＥ ＦＩＲＳＴ ＬＯＣＫ ＡＮＤ ＰＲＯＣＥＥＤ 
   ＴＯ ＷＯＲＤ ＳＣＲＡＭＢＬＥ ＧＡＭＥ！`
          )
        );
        playWordScrambleGame(); // Start with Scramble game, expects success to lead to Riddle
      } else if (answer === "  ＳＥＣＯＮＤ ＬＯＣＫ") {
        console.log(
          chalk.yellowBright(
            `\n    ＹＯＵ ＣＨＯＯＳＥ ＳＥＣＯＮＤ ＬＯＣＫ ＡＮＤ ＰＲＯＣＥＥＤ 
   ＴＯ ＲＩＤＤＬＥ ＧＡＭＥ！`
          )
        );
        playLastRiddleGame(); // Start with Riddle game, expects success to lead to Scramble
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the prompt
      console.log(chalk.red("Ｅｒｒｏｒ ｗｉｔｈ ｅｎｑｕｉｒｅｒ：", error));
    });
};

// Function to initiate the dungeon section and display choices
const startDungeonSection = () => {
  showTwoDoorsRoom(); // Function that presumably sets the scene for the two doors
  firstRoom(); // Function that likely initializes the first room settings or context
};
// Call the function to start the dungeon section
startDungeonSection();
