const chalk = require("chalk");
const figlet = require("figlet");
const readline = require("readline-sync");

// Welcome message using ASCII art
console.log(
  chalk.yellow(figlet.textSync("            Welcome to", { horizontalLayout: "full" }))
);
console.log(
  chalk.yellow(
    figlet.textSync("Escape The Dungeon", { horizontalLayout: "full" })
  )
);

// Game description
console.log(
  chalk.greenBright(`
  Welcome to "Escape the Dungeon"! 
  
  You find yourself trapped in a dark and mysterious dungeon filled with 
  monsters, puzzles, and locked doors. Your goal is to navigate through 
  the maze, solve riddles, fight creatures, and unlock the way to freedom.
  
  But be careful, danger lurks in every shadow!
  
  `)
);
// Prompt for the player's username
let username = readline.question(
  chalk.cyan("What is your name, brave adventurer? ")
);

// Greet the player
console.log(
  chalk.yellowBright(`\nWelcome, ${username}! Your journey begins now...`)
);

// Display initial stats
let player = {
  name: username,
  health: 100,
  attack: 10,
  defense: 5,
  items: [],
};

console.log(
  chalk.magentaBright(`
Your starting stats are:
- Health: ${player.health}
- Attack: ${player.attack}
- Defense: ${player.defense}
`)
);

// Game intro before moving to the first room
console.log(
  chalk.whiteBright(`
You stand at the entrance of a dark dungeon. Four doors lie before you:
one to the North, one to the South, one to the East, and one to the West.

Choose wisely as each door holds its own challenge...
`)
);
