

//AT HOOK REVAMP (author ifractal)


const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
})
bot.commands = new Collection();
bot.buttons = new Collection();
bot.selectMenus = new Collection();
bot.modals = new Collection();
bot.commandArray = [];

const TOKEN = "SNIP";


const funcs = fs.readdirSync('./src/functions');
for (const folder of funcs){
  const funcFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of funcFiles) require(`./functions/${folder}/${file}`)(bot);
}




bot.handleEvents();
bot.handleCommands();
bot.handleComponents();


bot.login(TOKEN);