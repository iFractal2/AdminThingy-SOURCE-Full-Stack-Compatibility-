module.exports = {
    name: 'ready',
    once: true,
    async execute(bot) {
        console.log(`Ready on ${bot.user.tag}`)
    }
}