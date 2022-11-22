const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
module.exports = {
    data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('rolls an n sided die')
    .addIntegerOption((option) => 
    option
        .setName('number')
        .setDescription('How many sides the die has')
        .setRequired(true)
    ),
    async execute(interaction, bot) {
        const sides = interaction.options.getInteger('number');
        const output = getRandomInt(parseInt(sides))
        const embed = new EmbedBuilder()
        .setTitle('Executed Command:')
        .setDescription('Dice')
        .setColor(0x18e1ee)
        .setAuthor({
            iconUrl: interaction.user.displayAvatarURL(),
            name: interaction.user.tag,
           })
           .setFooter({
            iconURL: bot.user.displayAvatarURL(),
            text: bot.user.tag
           })
        .addFields([
            {
                name: `Dice roll output:`,
                value: `${output} out of ${sides}`,
                inline: true
        }])
        await interaction.reply({
            embeds: [embed]
           })
       
    
    }
}