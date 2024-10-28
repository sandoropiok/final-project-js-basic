const readline = require("readline-sync");
const figlet = require("figlet");
const chalk = require("chalk");
const { Select } = require("enquirer");
const playNumberGuessingGame = require("./numberGuessingGame"); // Import the number guessing game function
const riddleChallenge = require("./riddleChallenge"); // Import the riddle challenge function
const playRockPaperScissors = require("./rockPaperScissorsGame"); // Import the rock-paper-scissors game function
const playTicTacToe = require("./ticTacToeGame"); // Import the tic-tac-toe game function

// Welcome message using ASCII art
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
// Game description
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
  chalk.cyan(`      𝕎𝕙𝕒𝕥 𝕚𝕤 𝕪𝕠𝕦𝕣 𝕟𝕒𝕞𝕖, 𝕓𝕣𝕒𝕧𝕖 𝕒𝕕𝕧𝕖𝕟𝕥𝕦𝕣𝕖𝕣❔`)
);

// Greet the player
console.log(
  chalk.yellowBright(
    figlet.textSync(`\nWelcome, ${username.toUpperCase()}`, {
      font: "Double", // Change this to any figlet font you like
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 180,
      whitespaceBreak: true,
    })
  )
);

// Function to display the room with two doors (left and right)
function showTwoDoorsRoom() {
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
  ┓┏      ┏•   ┓             ┓┏  •         ┓•   ┓                  • ┓            ┓        
  ┗┫┏┓┓┏  ╋┓┏┓┏┫  ┓┏┏┓┓┏┏┓┏┏┓┃╋  ┓┏┓  ┏┓  ┏┫┓┏┳┓┃┓┏  ┏┓┏┓┏┓┏┳┓  ┓┏┏┓╋┣┓  ╋┓┏┏┏┓  ┏┫┏┓┏┓┏┓┏•
  ┗┛┗┛┗┻  ┛┗┛┗┗┻  ┗┫┗┛┗┻┛ ┛┗ ┗┛  ┗┛┗  ┗┻  ┗┻┗┛┗┗┗┗┫  ┛ ┗┛┗┛┛┗┗  ┗┻┛┗┗┛┗  ┗┗┻┛┗┛  ┗┻┗┛┗┛┛ ┛•
                   ┛                              ┛                                        
  `)
  );
}

// Function to prompt the player to choose a direction using enquirer
function firstRoom() {
  const prompt = new Select({
    name: "firstRoomChoice",
    message: "  ＣＨＯＯＳＥ ＴＨＥ ＤＯＯＲ ！！！",
    choices: ["  ＜ＬＥＦＴ ＤＯＯＲ＞", "  ＜ＲＩＧＨＴ ＤＯＯＲ＞"],
  });

  prompt
    .run()
    .then((answer) => {
      if (answer === "  ＜ＬＥＦＴ ＤＯＯＲ＞") {
        console.log(
          chalk.cyanBright(
            `\n      𝚃𝚑𝚎𝚛𝚎'𝚜 𝚊 𝚗𝚘𝚝𝚎 𝚘𝚗 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛: '𝚃𝚘 𝚘𝚙𝚎𝚗 𝚝𝚑𝚒𝚜 𝚍𝚘𝚘𝚛, 𝚢𝚘𝚞 𝚗𝚎𝚎𝚍 𝚝𝚘 𝚐𝚞𝚎𝚜𝚜 𝚝𝚑𝚎 𝚌𝚘𝚛𝚛𝚎𝚌𝚝 𝚗𝚞𝚖𝚋𝚎𝚛...`
          )
        );
        const success = playNumberGuessingGame(); // Call the number guessing game
        if (success) {
          secondRoom(); // Call the next room
        } else {
          console.log(
            chalk.red(`
        ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
         ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
         ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
        `)
          );
          firstRoom();
        }
      } else if (answer === "  ＜ＲＩＧＨＴ ＤＯＯＲ＞") {
        console.log(
          chalk.cyanBright(
            `\n      𝚃𝚑𝚎𝚛𝚎'𝚜 𝚊 𝚛𝚒𝚍𝚍𝚕𝚎 𝚘𝚗 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛: '𝚃𝚘 𝚘𝚙𝚎𝚗 𝚝𝚑𝚒𝚜 𝚍𝚘𝚘𝚛, 𝚊𝚗𝚜𝚠𝚎𝚛 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐...`
          )
        );
        const success = riddleChallenge(); // Call the riddle challenge for the Right door
        if (success) {
          secondRoom(); // Call the next room
        } else {
          console.log(
            chalk.red(`
        ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
         ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
         ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
        `)
          );
          firstRoom(); // Retry if failed
        }
      }
    })
    .catch((error) => {
      console.log(chalk.red("Error with enquirer:", error));
    });
}

function secondRoom() {
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

  const prompt = new Select({
    name: "secondRoomChoice",
    message: "  ＣＨＯＯＳＥ ＴＨＥ ＤＯＯＲ ！！！",
    choices: ["  ＷＥＳＴ ＤＯＯＲ", "  ＥＡＳＴ ＤＯＯＲ"],
  });
  prompt
    .run()
    .then((answer) => {
      if (answer === "  ＷＥＳＴ ＤＯＯＲ") {
        if (playRockPaperScissors()) {
          console.log(chalk.green("\nYou unlock the left door and move to the next room..."));
          return playRockPaperScissors()
            .then((success2) => {
              if (success2) {
                thirdRoom(); // Call the next room
            } else {
               console.log(
                chalk.red(`
            ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
             ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
             ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
            `));
              secondRoom();
            }
        });
      } else if (answer === "  ＥＡＳＴ ＤＯＯＲ") {
        if (playTicTacToe()) {
          console.log(chalk.green("\nYou unlock the right door and move to the next room..."));
          return playTicTacToe()
          .then((success2) => {if (success2) {
            thirdRoom(); // Call the next room
          } else {
            console.log(
              chalk.red(`
          ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
           ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
           ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
          `));
            secondRoom();
           }
         });  
        }
      }
    }})
    .catch((error) => {
      console.log(chalk.red("Error with enquirer:", error));
    });
}

function thirdRoom() {
  let lastRoomArt = `
     \\                                                              /
      \\                                                            /
       \\ ________________________________________________________ /
        |_                                                       _|
        |_                                                       _|
        |_                                                       _|
        |_         ___________________________________           _|
        |_         _|* * * * * * * * * * * * * * * *|_           _|
        |_         _|*      .----------------.     *|_           _|
        |_         _|*     | .--------------. |    *|_           _|
        |_         _|*     | |     ____     | |    *|_           _|
        |_         _|*     | |   .' || '.   | |    *|_           _|
        |_         _|*     | |  /  .--.  \\  | |    *|_           _|
        |_         _|*     | |  |¬|    |¬|  | |    *|_           _|
        |_         _|*     | |  \\  '--'  /  | |    *|_           _|
        |_         _|*     | |   '._!!_.'   | |    *|_           _|
        |_         _|*     | |              | |    *|_           _|
        |_         _|*     | '--------------' |    *|_           _|
        |_         _|*      '----------------'     *|_           _|
        |_         _|*                             *|_           _|
        |___________|*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*|_____________|
       /                                                           \\
      /                                                             \\
     /                                                               \\
`;
  console.log(chalk.greenBright(lastRoomArt));
  console.log(
    chalk.greenBright(`
┏┳┓┓┏┳┏┓  ┳┏┓  ┏┳┓┓┏┏┓  ┓ ┏┓┏┓┏┳┓  ┳┓┏┓┏┓┳┳┓  ┓ ┏┳┏┳┓┓┏  ┏┳┓┓ ┏┏┓  ┓ ┏┓┏┓┓┏┓ ╻╻╻
 ┃ ┣┫┃┗┓  ┃┗┓   ┃ ┣┫┣   ┃ ┣┫┗┓ ┃   ┣┫┃┃┃┃┃┃┃  ┃┃┃┃ ┃ ┣┫   ┃ ┃┃┃┃┃  ┃ ┃┃┃ ┃┫  ┃┃┃
 ┻ ┛┗┻┗┛  ┻┗┛   ┻ ┛┗┗┛  ┗┛┛┗┗┛ ┻   ┛┗┗┛┗┛┛ ┗  ┗┻┛┻ ┻ ┛┗   ┻ ┗┻┛┗┛  ┗┛┗┛┗┛┛┗┛ •••   
`)
  );

  const prompt = new Select({
    name: "thirdRoomChoice",
    message: "  ＣＨＯＯＳＥ ＴＨＥ ＤＯＯＲ ＬＯＣＫ ！！！",
    choices: ["  ＦＩＲＳＴ ＬＯＣＫ", "  ＳＥＣＯＮＤ ＬＯＣＫ"],
  });
  prompt
    .run()
    .then((answer) => {
      if (answer === "  ＦＩＲＳＴ ＬＯＣＫ") {
        if (playRockPaperScissors()) {
          console.log(
            chalk.green(
              "\nYou unlock the left door and move to the next room..."
            )
          );
          const success = playRockPaperScissors();
          if (success) {
            thirdRoom(); // Call the next room
          } else {
            console.log(
              chalk.red(`
          ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
           ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
           ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
          `)
            );
            secondRoom();
          }
        }
      } else if (answer === "  ＳＥＣＯＮＤ ＬＯＣＫ") {
        if (playTicTacToe()) {
          console.log(
            chalk.green(
              "\nYou unlock the right door and move to the next room..."
            )
          );
          const success = playRockPaperScissors();
          if (success) {
            thirdRoom(); // Call the next room
          } else {
            console.log(
              chalk.red(`
          ╔╦╗╦═╗╦ ╦  ╔╦╗╦ ╦╔═╗  ╔═╗╔╦╗╦ ╦╔═╗╦═╗  ╔╦╗╔═╗╔═╗╦═╗
           ║ ╠╦╝╚╦╝   ║ ╠═╣║╣   ║ ║ ║ ╠═╣║╣ ╠╦╝   ║║║ ║║ ║╠╦╝
           ╩ ╩╚═ ╩    ╩ ╩ ╩╚═╝  ╚═╝ ╩ ╩ ╩╚═╝╩╚═  ═╩╝╚═╝╚═╝╩╚═
          `)
            );
            secondRoom();
          }
        }
      }
    })
    .catch((error) => {
      console.log(chalk.red("Error with enquirer:", error));
    });
}

// Function to initiate the room and player choice
function startDungeonSection() {
  showTwoDoorsRoom();
  firstRoom();
}

startDungeonSection();
