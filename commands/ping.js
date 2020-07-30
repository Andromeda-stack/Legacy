
const mess = require('discord.js')


module.exports = {
    name: 'ping',
    description: 'API and Latency',
    async execute(message) {
        
        const awaitPing = await message.channel.send('Loading bots ping....')
        
        
        const helpEmbed = new mess.MessageEmbed()
            .setColor(0x28C9D0)
            .setTitle(`Ping and Latency`)

            .setDescription(`Done! latency = ${awaitPing.createdTimestamp - message.createdTimestamp}ms  API = ${Math.round(message.client.ws.ping)}ms`)

            .setFooter('Legacy Audit: Ping')

            .setTimestamp()
        message.channel.send(helpEmbed)
        awaitPing.delete()
    }
}
console.log("Ping command loaded");