const readline = require("readline-sync");
const chalk = require("chalk");

function riddleChallenge() {
  console.log(
    chalk.magentaBright(`
          Ａ ｂｏｏｍｉｎｇ ｖｏｉｃｅ ｅｃｈｏｅｓ ｆｒｏｍ ｔｈｅ ｓｈａｄｏｗｓ：
          

          ╦  ┌─┐┌─┐┌─┐┌─┐┬┌─  ┬ ┬┬┌┬┐┬ ┬┌─┐┬ ┬┌┬┐  ┌─┐  ┌┬┐┌─┐┬ ┬┌┬┐┬ ┬  
          ║  └─┐├─┘├┤ ├─┤├┴┐  ││││ │ ├─┤│ ││ │ │   ├─┤  ││││ ││ │ │ ├─┤  
          ╩  └─┘┴  └─┘┴ ┴┴ ┴  └┴┘┴ ┴ ┴ ┴└─┘└─┘ ┴   ┴ ┴  ┴ ┴└─┘└─┘ ┴ ┴ ┴  
          ┌─┐┌┐┌┌┬┐  ┬ ┬┌─┐┌─┐┬─┐  ┬ ┬┬┌┬┐┬ ┬┌─┐┬ ┬┌┬┐  ┌─┐┌─┐┬─┐┌─┐ 
          ├─┤│││ ││  ├─┤├┤ ├─┤├┬┘  ││││ │ ├─┤│ ││ │ │   ├┤ ├─┤├┬┘└─┐ 
          ┴ ┴┘└┘─┴┘  ┴ ┴└─┘┴ ┴┴└─  └┴┘┴ ┴ ┴ ┴└─┘└─┘ ┴   └─┘┴ ┴┴└─└─┘o
          ╦  ┬ ┬┌─┐┬  ┬┌─┐  ┌┐┌┌─┐  ┌┐ ┌─┐┌┬┐┬ ┬  ┌┐ ┬ ┬┌┬┐  
          ║  ├─┤├─┤└┐┌┘├┤   ││││ │  ├┴┐│ │ ││└┬┘  ├┴┐│ │ │   
          ╩  ┴ ┴┴ ┴ └┘ └─┘  ┘└┘└─┘  └─┘└─┘─┴┘ ┴┘  └─┘└─┘ ┴   
          ╦  ┌─┐┌─┐┌┬┐┌─┐  ┌─┐┬  ┬┬  ┬┌─┐  ┬ ┬┬┌┬┐┬ ┬  ┬ ┬┬┌┐┌┌┬┐ 
          ║  │  │ ││││├┤   ├─┤│  │└┐┌┘├┤   ││││ │ ├─┤  │││││││ ││ 
          ╩  └─┘└─┘┴ ┴└─┘  ┴ ┴┴─┘┴ └┘ └─┘  └┴┘┴ ┴ ┴ ┴  └┴┘┴┘└┘─┴┘o
          ╦ ╦┬ ┬┌─┐┌┬┐  ┌─┐┌┬┐  ╦┌─┐
          ║║║├─┤├─┤ │   ├─┤│││  ║ ┌┘
          ╚╩╝┴ ┴┴ ┴ ┴   ┴ ┴┴ ┴  ╩ o 
  `)
  );

  let answer = readline
    .question(chalk.bold.cyan("      Ⴤ〇ᑌᖇ ᗩƝ⟆ᙡᕮᖇ: "))
    .toLowerCase();

  if (answer === "echo") {
    console.log(
      chalk.green(`  
          ▒█▀▀█ █▀▀█ █▀▀█ █▀▀█ █▀▀ █▀▀ ▀▀█▀▀ █ 
          ▒█░░░ █░░█ █▄▄▀ █▄▄▀ █▀▀ █░░ ░░█░░ █ 
          ▒█▄▄█ ▀▀▀▀ ▀░▀▀ ▀░▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▄
     
      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, ᗩƝↁ Ⴤ〇⋃ ᑭᖇ〇ᑕᕮᕮↁ Ƭ〇 Ƭᕼᕮ ƝᕮⲬƬ ᖇ〇〇Ⲙ...`)
    );
    return true; // Indicate success
  } else {
    console.log(
      chalk.redBright(`    
          ██████████████████████████████████▀█████
          █▄─█▀▀▀█─▄█▄─▄▄▀█─▄▄─█▄─▀█▄─▄█─▄▄▄▄█████
          ██─█─█─█─███─▄─▄█─██─██─█▄▀─██─██▄─█░░██
          ▀▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▀▄▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▄▄▀▀

      Ƭᕼᕮ ↁ〇〇ᖇ ᖇᕮⲘᗩᓰƝ⟆ し〇ᑕ𐌊ᕮᗪ.`)
    );
    return false; // Indicate failure
  }
}

module.exports = riddleChallenge;
