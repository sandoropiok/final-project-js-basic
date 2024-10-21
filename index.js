const chalk = require("chalk");
const figlet = require("figlet");
const readline = require("readline-sync");

// Welcome message using ASCII art
console.log(
  chalk.yellow(
    figlet.textSync("            Welcome to", { horizontalLayout: "full" })
  )
);
console.log(
  chalk.yellow(
    figlet.textSync("Escape The Dungeon", { horizontalLayout: "full" })
  )
);

// Game description
console.log(
  chalk.greenBright(`

            ░█──░█ █▀▀ █── █▀▀ █▀▀█ █▀▄▀█ █▀▀ 　 ▀▀█▀▀ █▀▀█ 
            ░█░█░█ █▀▀ █── █── █──█ █─▀─█ █▀▀ 　 ──█── █──█ 
            ░█▄▀▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀───▀ ▀▀▀ 　 ──▀── ▀▀▀▀ 
            
██╗██╗███████╗░██████╗░█████╗░░█████╗░██████╗░███████╗  ████████╗██╗░░██╗███████╗
╚█║╚█║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝  ╚══██╔══╝██║░░██║██╔════╝
░╚╝░╚╝█████╗░░╚█████╗░██║░░╚═╝███████║██████╔╝█████╗░░  ░░░██║░░░███████║█████╗░░
░░░░░░██╔══╝░░░╚═══██╗██║░░██╗██╔══██║██╔═══╝░██╔══╝░░  ░░░██║░░░██╔══██║██╔══╝░░
░░░░░░███████╗██████╔╝╚█████╔╝██║░░██║██║░░░░░███████╗  ░░░██║░░░██║░░██║███████╗
░░░░░░╚══════╝╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚══════╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝

       ██████╗░██╗░░░██╗███╗░░██╗░██████╗░███████╗░█████╗░███╗░░██╗██╗██╗██╗
       ██╔══██╗██║░░░██║████╗░██║██╔════╝░██╔════╝██╔══██╗████╗░██║╚█║╚█║██║
       ██║░░██║██║░░░██║██╔██╗██║██║░░██╗░█████╗░░██║░░██║██╔██╗██║░╚╝░╚╝██║
       ██║░░██║██║░░░██║██║╚████║██║░░╚██╗██╔══╝░░██║░░██║██║╚████║░░░░░░╚═╝
       ██████╔╝╚██████╔╝██║░╚███║╚██████╔╝███████╗╚█████╔╝██║░╚███║░░░░░░██╗
       ╚═════╝░░╚═════╝░╚═╝░░╚══╝░╚═════╝░╚══════╝░╚════╝░╚═╝░░╚══╝░░░░░░╚═╝



░        ░░░      ░░░░      ░░░░      ░░░       ░░░        ░░░░░░░░        ░░  ░░░░  ░░        ░░░░░░░░       ░░░  ░░░░  ░░   ░░░  ░░░      ░░░        ░░░      ░░░   ░░░  ░
▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒    ▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒    ▒▒  ▒
▓      ▓▓▓▓▓      ▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓       ▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓        ▓▓      ▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓  ▓▓  ▓  ▓  ▓▓  ▓▓▓   ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓  ▓  ▓  ▓
█  ██████████████  ██  ████  ██        ██  ████████  █████████████████  █████  ████  ██  ██████████████  ████  ██  ████  ██  ██    ██  ████  ██  ████████  ████  ██  ██    █
█        ███      ████      ███  ████  ██  ████████        ███████████  █████  ████  ██        ████████       ████      ███  ███   ███      ███        ███      ███  ███   █
                                                                                                                                                                            

█     █░▓█████  ██▓     ▄████▄   ▒█████   ███▄ ▄███▓▓█████    ▄▄▄█████▓ ▒█████  
▓█░ █ ░█░▓█   ▀ ▓██▒    ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒▓█   ▀    ▓  ██▒ ▓▒▒██▒  ██▒
▒█░ █ ░█ ▒███   ▒██░    ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░▒███      ▒ ▓██░ ▒░▒██░  ██▒
░█░ █ ░█ ▒▓█  ▄ ▒██░    ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ ▒▓█  ▄    ░ ▓██▓ ░ ▒██   ██░
░░██▒██▓ ░▒████▒░██████▒▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒░▒████▒     ▒██▒ ░ ░ ████▓▒░
░ ▓░▒ ▒  ░░ ▒░ ░░ ▒░▓  ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░░░ ▒░ ░     ▒ ░░   ░ ▒░▒░▒░ 
  ▒ ░ ░   ░ ░  ░░ ░ ▒  ░  ░  ▒     ░ ▒ ▒░ ░  ░      ░ ░ ░  ░       ░      ░ ▒ ▒░ 
  ░   ░     ░     ░ ░   ░        ░ ░ ░ ▒  ░      ░      ░        ░      ░ ░ ░ ▒  
    ░       ░  ░    ░  ░░ ░          ░ ░         ░      ░  ░                ░ ░  
                        ░                                                        

  ▓█████   ██████  ▄████▄   ▄▄▄       ██▓███  ▓█████    ▄▄▄█████▓ ██░ ██ ▓█████     
  ▓█   ▀ ▒██    ▒ ▒██▀ ▀█  ▒████▄    ▓██░  ██▒▓█   ▀    ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀     
  ▒███   ░ ▓██▄   ▒▓█    ▄ ▒██  ▀█▄  ▓██░ ██▓▒▒███      ▒ ▓██░ ▒░▒██▀▀██░▒███       
  ▒▓█  ▄   ▒   ██▒▒▓▓▄ ▄██▒░██▄▄▄▄██ ▒██▄█▓▒ ▒▒▓█  ▄    ░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄     
  ░▒████▒▒██████▒▒▒ ▓███▀ ░ ▓█   ▓██▒▒██▒ ░  ░░▒████▒     ▒██▒ ░ ░▓█▒░██▓░▒████▒    
  ░░ ▒░ ░▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░ ▒▒   ▓▒█░▒▓▒░ ░  ░░░ ▒░ ░     ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░    
   ░ ░  ░░ ░▒  ░ ░  ░  ▒     ▒   ▒▒ ░░▒ ░      ░ ░  ░       ░     ▒ ░▒░ ░ ░ ░  ░    
     ░   ░  ░  ░  ░          ░   ▒   ░░          ░        ░       ░  ░░ ░   ░       
     ░  ░      ░  ░ ░            ░  ░            ░  ░             ░  ░  ░   ░  ░    
                  ░                                                                 
      ▓█████▄  █    ██  ███▄    █   ▄████ ▓█████  ▒█████   ███▄    █  ▐██▌
      ▒██▀ ██▌ ██  ▓██▒ ██ ▀█   █  ██▒ ▀█▒▓█   ▀ ▒██▒  ██▒ ██ ▀█   █  ▐██▌
      ░██   █▌▓██  ▒██░▓██  ▀█ ██▒▒██░▄▄▄░▒███   ▒██░  ██▒▓██  ▀█ ██▒ ▐██▌
      ░▓█▄   ▌▓▓█  ░██░▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄ ▒██   ██░▓██▒  ▐▌██▒ ▓██▒
      ░▒████▓ ▒▒█████▓ ▒██░   ▓██░░▒▓███▀▒░▒████▒░ ████▓▒░▒██░   ▓██░ ▒▄▄ 
       ▒▒▓  ▒ ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒  ░▒   ▒ ░░ ▒░ ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ░▀▀▒
       ░ ▒  ▒ ░░▒░ ░ ░ ░ ░░   ░ ▒░  ░   ░  ░ ░  ░  ░ ▒ ▒░ ░ ░░   ░ ▒░ ░  ░
       ░ ░  ░  ░░░ ░ ░    ░   ░ ░ ░ ░   ░    ░   ░ ░ ░ ▒     ░   ░ ░     ░
         ░       ░              ░       ░    ░  ░    ░ ░           ░  ░   
       ░                                                                  
      You find yourself trapped in a dark, mysterious dungeon filled with 
      riddles, logic puzzles, and locked doors. The only way out is to solve 
      the challenges you encounter. Choose wisely, and perhaps you'll escape... 
      Fail, and you'll be trapped forever.

      Your journey begins now. Will you survive the dungeon's twisted trials?
`)
);

// Prompt for the player's username
let username = readline.question(
  chalk.cyan(`      𝕎𝕙𝕒𝕥 𝕚𝕤 𝕪𝕠𝕦𝕣 𝕟𝕒𝕞𝕖, 𝕓𝕣𝕒𝕧𝕖 𝕒𝕕𝕧𝕖𝕟𝕥𝕦𝕣𝕖𝕣❔`)
);

// Greet the player
console.log(
  chalk.yellowBright(
    `\nWelcome, ${username}! Let the dungeon's challenges begin...`
  )
);

// Next steps: Entering the first room (example)
console.log(
  chalk.bgBlack(`
You find yourself in a dimly lit room with four doors:

▄▄   █▄░█ █▀█ █▀█ ▀█▀ █░█
░░   █░▀█ █▄█ █▀▄ ░█░ █▀█

▄▄   █▀ █▀█ █░█ ▀█▀ █░█
░░   ▄█ █▄█ █▄█ ░█░ █▀█

▄▄   █▀▀ ▄▀█ █▀ ▀█▀
░░   ██▄ █▀█ ▄█ ░█░

▄▄   █░█░█ █▀▀ █▀ ▀█▀
░░   ▀▄▀▄▀ ██▄ ▄█ ░█░

Each door holds a different challenge. Choose your path carefully...
`)
);

// Prompt for door choice
let direction = readline
  .question(chalk.cyan("Which door do you choose? (North/South/East/West): "))
  .toLowerCase();

if (direction === "north") {
  console.log(chalk.yellow("You push open the North door and step through..."));
  // Here you would trigger a challenge or riddle
  function riddleChallenge() {
    console.log(
      chalk.magentaBright(`
      A booming voice echoes from the shadows: 
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"
    `)
    );

    let answer = readline.question(chalk.cyan("Your answer: ")).toLowerCase();

    if (answer === "echo") {
      console.log(
        chalk.green(
          "Correct! The door unlocks and you proceed to the next room."
        )
      );
      // You can trigger the next room here
    } else {
      console.log(chalk.red("Wrong answer! The door remains locked."));
      // Optionally, ask them to try again or trigger a different outcome
    }
  }
  if (direction === "north") {
    console.log(
      chalk.yellow("You push open the North door and step through...")
    );
    riddleChallenge(); // Call the riddle challenge function here
  }
  // Example: riddleChallenge();
} else if (direction === "south") {
  console.log(
    chalk.yellow(
      "You approach the South door and it presents a strange riddle..."
    )
  );
  // Example: riddleChallenge();
} else if (direction === "east") {
  console.log(
    chalk.yellow(
      "You move towards the East door, but it won't open without solving a puzzle..."
    )
  );
  // Example: puzzleChallenge();
} else if (direction === "west") {
  console.log(
    chalk.yellow("The West door creaks open to reveal another room...")
  );
  // Example: nextRoom();
} else {
  console.log(chalk.red("That’s not a valid choice. Try again."));
}
function riddleChallenge() {
  console.log(
    chalk.magentaBright(`
    A booming voice echoes from the shadows: 
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"
  `)
  );

  let answer = readline.question(chalk.cyan("Your answer: ")).toLowerCase();

  if (answer === "echo") {
    console.log(
      chalk.green(`
 ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░▒▓██████▓▒░▒▓████████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓███████▓▒░░▒▓██████▓▒░░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░           
 ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓██████▓▒░  ░▒▓█▓▒░   ░▒▓█▓▒░ 
                                                                                                 
                                                                                                 
`)
    );
    // You can trigger the next room here
  } else {
    console.log(
      chalk.red(`Now you see on floor
_____________________________________________________________________________/\\\____        
____________________________________________________________________________/\\\\\\\__       
 _______________________________________________________________/\\\\\\\\___/\\\\\\\\\_ 
  __/\\____/\\___/\\__/\\/\\\\\\\______/\\\\\_____/\\/\\\\\\____/\\\////\\\_\//\\\\\\\__     
   _\/\\\__/\\\\_/\\\_\/\\\/////\\\___/\\\///\\\__\/\\\////\\\__\//\\\\\\\\\__\//\\\\\___    
    _\//\\\/\\\\\/\\\__\/\\\___\///___/\\\__\//\\\_\/\\\__\//\\\__\///////\\\___\//\\\____   
     __\//\\\\\/\\\\\___\/\\\_________\//\\\__/\\\__\/\\\___\/\\\__/\\_____\\\____\///_____  
      ___\//\\\\//\\\____\/\\\__________\///\\\\\/___\/\\\___\/\\\_\//\\\\\\\\______/\\\____ 
       ____\///__\///_____\///_____________\/////_____\///____\///___\////////______\///_____
`)
    );
    // Optionally, ask them to try again or trigger a different outcome
  }
}
if (direction === "north") {
  console.log(chalk.yellow("You push open the North door and step through..."));
  riddleChallenge(); // Call the riddle challenge function here
}
