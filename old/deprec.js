
const { SlashCommandBuilder, EmbedBuilder, Embed, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remotecmd')
        .setDescription('execute commands session wide from the bot'),

    async execute(interaction, bot) {
        const modal = new ModalBuilder()
            .setCustomId('remoteModal')
            .setTitle('Command Input');

        const textInput = new TextInputBuilder()
            .setCustomId('commandInput')
            .setLabel('Type Command Here')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);


        modal.addComponents(new ActionRowBuilder().addComponents(textInput));
        const embed = new EmbedBuilder()
            .setTitle("Executed command:")
            .setDescription("Modal")
            .setColor(0x18e1ee)
            .addFields(
                {
                    name:`There are`
                }
            )

        await interaction.showModal(modal);
    }
}