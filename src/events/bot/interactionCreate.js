const { InteractionType } = require('discord.js')


module.exports = {
    name: 'interactionCreate',
    async execute(interaction, bot) {
        if (interaction.isChatInputCommand()) {
            const { commands } = bot;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, bot);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: `An internal error occured trying to perform this command.`,
                    ephemeral: true
                })
            }

        } else if (interaction.isButton()) {
            const { buttons } = bot;
            const { customId } = interaction;
            const button = buttons.get(customId);
            if (!button) return new Error('Something went wrong!');

            try {
                await button.execute(interaction, bot);

            } catch (e) {
                console.error(e);
            }

        } else if (interaction.isSelectMenu()) {
            const { selectMenus } = bot;
            const { customId } = interaction;
            const menu = selectMenus.get(customId);
            if (!menu) return new Error("Something went wrong!");

            try {
                await menu.execute(interaction, bot);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.type == InteractionType.ModalSubmit) {
            const { modals } = bot;
            const { customId } = interaction;
            const modal = modals.get(customId);
            if (!modal) return new Error('Something went wrong!')

            try {
             await modal.execute(interaction, bot);   
            } catch (error) {
                console.error(error);
            }
        }
    }
}