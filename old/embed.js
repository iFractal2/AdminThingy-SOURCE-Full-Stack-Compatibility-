
const { SlashCommandBuilder , EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('embed debugging'),
    async execute(interaction, bot){
       const embed = new EmbedBuilder()
       .setTitle(`This is an embed!`)
       .setDescription(`Poopy!`)
       .setColor(0x18e1ee)
       .setImage(bot.user.displayAvatarURL())
       .setThumbnail(bot.user.displayAvatarURL())
       .setTimestamp(Date.now())
       .setAuthor({
        url: `https://main.ikryptxc.link/admindthingy/index.php`,
        iconUrl: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
       })
       .setFooter({
        iconURL: bot.user.displayAvatarURL(),
        text: bot.user.tag
       })
       
       .setURL(`https://main.ikryptxc.link/adminthingy/index.php`)
       .addFields([
        {
            name: `Field 1`,
            value: `Field value 1`,
            inline: true
        },
        {
            name: `Field 2`,
            value: `Field value 2`,
            inline: true
        }
       ]);
       await interaction.reply({
        embeds: [embed]
       })
    }
}