
const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = {
    
    data: new SlashCommandBuilder()
        .setName('remotecmd')
        .setDescription('execute commands session wide through the bot'),
       
        
    async execute(interaction, bot) {
     
        const Http = new XMLHttpRequest();
        const url="http://main.ikryptxc.link:21212/api/v1/servers";
        Http.open("GET", url,false);
        Http.send();
       // console.log(Object.keys(JSON.stringify(Http.responseText)).length)
        const menu = new SelectMenuBuilder()
            .setCustomId('serverMenu')
           
            const embed = new EmbedBuilder()
            .setTitle("Executed command:")
            .setDescription("Remote CMD")
            .setColor(0x18e1ee)
            if (Http.responseText){
            if(JSON.stringify(Http.responseText).length > 4){
                embed.addFields(
                    {
                        name: `Sessions available!`,
                        value: `Click the dropdown menu and select a server to focus on it.`
                    }
                )
                
                for (var key in JSON.parse(Http.responseText)) {
                   
                   menu.addOptions([
                  {
                        label: `${key}`,
                        value: `${key}`
                  }
                   ])
                }
                await interaction.reply({
                    // content: newMessage,
                    components: [new ActionRowBuilder().addComponents(menu)],
                    embeds: [embed]
                });
                } else {
                    embed.addFields(
                        {
                            name: `No sessions`,
                            value: `No connections available!`
                        }
                    )
                    await interaction.reply({
                        // content: newMessage,
                        //components: [new ActionRowBuilder().addComponents(menu)],
                        embeds: [embed]
                    });
                }
            } else {
                const embed = new EmbedBuilder()
                .setTitle("Executed Command:")
                .setDescription("Remote CMD")
                .setColor(0x18e1ee)
                .addFields(
                    {
                        name: `API ERROR`,
                        value: `No response from webapp`
                    }
                )
                await interaction.reply({
                    // content: newMessage,
                    //components: [new ActionRowBuilder().addComponents(menu)],
                    embeds: [embed]
                });
            }
           
       


       
    }
}