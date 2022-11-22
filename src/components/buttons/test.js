module.exports = {
    data: {
        name: `test`
    },
    async execute(interaction, bot) {
        await interaction.reply({
            content: 'this is a test!'
        })
    }
}