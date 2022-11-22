
const { SlashCommandBuilder, EmbedBuilder, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('test'),
        
    async execute(interaction, bot){
        const message = await interaction.deferReply({
            fetchReply: true
        });
       const button = new ButtonBuilder()
        .setCustomId('test')
        .setLabel('Test')
        .setStyle(ButtonStyle.Primary)
        const embed = new EmbedBuilder()
        .setTitle("Executed command:")
        .setDescription("Button")
        .setColor(0x18e1ee)
        .addFields([
            {
                name:`a`,
                value:`a`,
                inline:true
            },
            {
                name:`a`,
                value:`a`,
                inline:true
            }
        ])
        
        await interaction.editReply({
            embeds: [embed],
           components: [new ActionRowBuilder().addComponents(button)]
           
        });
    }
}