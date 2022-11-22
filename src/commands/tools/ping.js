
const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('simple ping command'),
        
    async execute(interaction, bot){
       const message = await interaction.deferReply({
           fetchReply: true
       });
        const embed = new EmbedBuilder()
        .setTitle("Executed command:")
        .setDescription("Ping")
        .setColor(0x18e1ee)
        .addFields([
            {
                name:`API Response Time`,
                value:`(${bot.ws.ping}) ms`,
                inline:true
            },
            {
                name:`Client Response Time`,
                value:`(${message.createdTimestamp - interaction.createdTimestamp}) ms`,
                inline:true
            }
        ])
        const newMessage = `API Response Time: ${bot.ws.ping}ms\nClient Response Time: ${message.createdTimestamp - interaction.createdTimestamp}ms`
        await interaction.editReply({
          // content: newMessage,
            embeds: [embed]
        });
    }
}