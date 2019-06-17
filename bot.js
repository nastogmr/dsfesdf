const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590160699351629854")
setInterval(function() {
channel.send(`سبامممممممممممم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
