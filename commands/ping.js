console.log("Ping command loaded");

const client = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'API and Latency',
    async execute(message) {
        const awaitPing = await message.channel.send('Loading bots API and latency.....')
        awaitPing.edit(`Done! latency = ${awaitPing.createdTimestamp - message.createdTimestamp}ms  API = ${Math.round(message.client.ws.ping)}ms`);
    }
}