const mess = require('discord.js')
const {
    prefix
} = require('../prop.json');

console.log('Help command loaded');

module.exports = {
    name: 'help',
    description: 'Simple help embed',
    execute(message) {
        const helpEmbed = new mess.MessageEmbed()

            .setColor(0x28C9D0)

            .setTitle(message.guild)

            .addFields({
                name: `${prefix}purge {1-100}`,
                value: 'Deletes upto 100 messages, **Mods + Admins**'
            }, {
                name: `${prefix}ban`,
                value: 'Bans members, **Mods + Admins**'
            }, {
                name: `${prefix}kick`,
                value: 'Kick members, **Mods + Admins**'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, {
                name: `${prefix}ping`,
                value: 'Shows current API Latency'
            })
            .setFooter('Legacy Help Command, LiftFork#6609')

            .setTimestamp()
        message.channel.send(helpEmbed);
    }
}