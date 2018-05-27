const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Last V Origin, !help");
    console.log("Le bot a bien ete connecter");
});

bot.login("NDUwMjMwNTg0MDU3MjY2MTc2.DewNtg.USj2xJ-saTHpLrQalEdaxjjD_mo");
