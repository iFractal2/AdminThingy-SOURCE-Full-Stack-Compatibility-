const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');


module.exports = (bot) => {
    bot.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));

            const { commands, commandArray } = bot
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
            }
        }

        const clientId = '763121144453922886';
        const guildId = '339639135067439105';
        const rest = new REST({ version: '9' }).setToken('NzYzMTIxMTQ0NDUzOTIyODg2.GkF79l.4N3m9eHeyM6zQdrLMYs07KLcXmNuLJaXvnbyWs');
       try {
        console.log("Begin refresh application commands...");

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: bot.commandArray,
        
       });
       console.log("Successfully reloaded application commands.");
    } catch (error) {
        console.error(error);
    }
    };
};