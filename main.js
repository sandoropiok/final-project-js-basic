const readline = require("readline-sync");
const figlet = require("figlet");
const chalk = require("chalk");
const { Select } = require("enquirer");
// Import the number guessing game function
const playNumberGuessingGame = require("./numberGuessingGame");
// Import the riddle challenge function
const riddleChallenge = require("./riddleChallenge");

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
    `\n      𝚆𝚎𝚕𝚌𝚘𝚖𝚎, ${username.toUpperCase()}! 𝙻𝚎𝚝 𝚝𝚑𝚎 𝚍𝚞𝚗𝚐𝚎𝚘𝚗'𝚜 𝚌𝚑𝚊𝚕𝚕𝚎𝚗𝚐𝚎𝚜 𝚋𝚎𝚐𝚒𝚗...`
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
    chalk.whiteBright(
      `\n      𝗬𝗼𝘂 𝗳𝗶𝗻𝗱 𝘆𝗼𝘂𝗿𝘀𝗲𝗹𝗳 𝗶𝗻 𝗮 𝗱𝗶𝗺𝗹𝘆 𝗹𝗶𝘁 𝗿𝗼𝗼𝗺 𝘄𝗶𝘁𝗵 𝘁𝘄𝗼 𝗱𝗼𝗼𝗿𝘀:`
    )
  );
}

// Function to prompt the player to choose a direction using enquirer
function chooseDirection() {
  const prompt = new Select({
    name: "direction",
    message: "  ＣＨＯＯＳＥ ＴＨＥ ＤＯＯＲ ！！！",
    choices: ["  ＬＥＦＴ", "  ＲＥＩＧＨＴ"],
  });

  prompt
    .run()
    .then((answer) => {
      if (answer === "  ＬＥＦＴ") {
        console.log(
          chalk.yellow(
            "\n      𝙏𝙝𝙚𝙧𝙚❜𝙨 𝙖 𝙣𝙤𝙩𝙚 𝙤𝙣 𝙩𝙝𝙚 𝙙𝙤𝙤𝙧: ❜𝙏𝙤 𝙤𝙥𝙚𝙣 𝙩𝙝𝙞𝙨 𝙙𝙤𝙤𝙧, 𝙮𝙤𝙪 𝙣𝙚𝙚𝙙 𝙩𝙤 𝙜𝙪𝙚𝙨𝙨 𝙩𝙝𝙚 𝙘𝙤𝙧𝙧𝙚𝙘𝙩 𝙣𝙪𝙢𝙗𝙚𝙧...❜"
          )
        );
        playNumberGuessingGame(); // Call the number guessing game
      } else if (answer === "  ＲＥＩＧＨＴ") {
        console.log(
          chalk.yellow(
            "\n      𝗧𝗵𝗲𝗿𝗲❜𝘀 𝗮 𝗿𝗶𝗱𝗱𝗹𝗲 𝗼𝗻 𝘁𝗵𝗲 𝗱𝗼𝗼𝗿: ❜𝗧𝗼 𝗼𝗽𝗲𝗻 𝘁𝗵𝗶𝘀 𝗱𝗼𝗼𝗿, 𝗮𝗻𝘀𝘄𝗲𝗿 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴...❜"
          )
        );
        riddleChallenge(); // Call the riddle challenge for the Right door
      }
    })
    .catch((error) => {
      console.log(chalk.red("Error with enquirer:", error));
    });
}

// Function to initiate the room and player choice
function startDungeonSection() {
  showTwoDoorsRoom(); // Show the new room with two doors
  chooseDirection(); // Ask the player to choose between Left and Right
}

startDungeonSection();
