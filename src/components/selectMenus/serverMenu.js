const { SlashCommandBuilder, EmbedBuilder, Embed, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = {
   
    data: {
        name: `serverMenu`,
    },
    async execute(interaction, bot) {
       
      var jobId = interaction.values[0]
        const modal = new ModalBuilder()
        .setCustomId('remoteModal')
        .setTitle(`${interaction.values[0]}`);
       
    const textInput = new TextInputBuilder()
        .setCustomId('commandInput')
        .setLabel(`Type Command Here (begin after Job ID)`)
        .setRequired(true)
        .setValue(`${interaction.values[0]} -`)
        .setStyle(TextInputStyle.Short);

       
    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    await interaction.showModal(modal);
    const Http = new XMLHttpRequest();
    const url="http://main.ikryptxc.link:21212/api/v1/updateFocused?jobId=" + interaction.values[0] + "&user=" +interaction.user.username + "&flag=set";
    Http.open("GET", url);
    Http.send();
    interaction.editReply({
        content: 'Parsing..'
    })
    return jobId;
    },
    //sessionId: `${sessionInfo.jobId}`
}