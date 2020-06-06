console.log("Ping command loaded");

module.exports = {
    name: 'ping',
    description: 'API and Latency',
    async execute(message) {
        const awaitPing = await message.channel.send('Loading bots API and latency.....')
        awaitPing.edit(`Done! latency = ${awaitPing.createdTimestamp - message.createdTimestamp}ms`);
    }
}