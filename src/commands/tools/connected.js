const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('connected')
    .setDescription('list any sessions connected with AdminThingy'),
    async execute(interaction, bot) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const Http = new XMLHttpRequest();
            const url="http://main.ikryptxc.link:21212/api/v1/servers";
            Http.open("GET", url,false);
            Http.send();
        const embed = new EmbedBuilder()
        .setTitle('Executed Command:')
        .setDescription('Connected')
        .setColor(0x18e1ee)
        .setAuthor({
            iconUrl: interaction.user.displayAvatarURL(),
            name: interaction.user.tag,
           })
           .setFooter({
            iconURL: bot.user.displayAvatarURL(),
            text: bot.user.tag
           })
           if(Http.responseText){
           if(JSON.stringify(Http.responseText).length > 4){
            for (var key in JSON.parse(Http.responseText)) {
          //  exampleEmbed.addFields(
             //   { name: "Server key: " + key, value: "Place: https://www.roblox.com/games/"+JSON.parse(Http.responseText)[key].placeId+"/ | Players: " + JSON.parse(Http.responseText)[key].plrs},
                
                
           // )
            embed.addFields([
                {
                    name: `Session info:`,
                    value: `${key}`,
                    inline: true
            }])
            }
            } else {
                embed.addFields(
                {
                    name: "No servers connected",
                    value: "No connections!"
                }
            )
            await interaction.editReply({
                embeds: [embed]
               })
        };
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
                await interaction.editReply({
                    // content: newMessage,
                    //components: [new ActionRowBuilder().addComponents(menu)],
                    embeds: [embed]
                });
           }
        
       
    
    }
}