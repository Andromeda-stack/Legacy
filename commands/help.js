const mess = require('discord.js')

const {
    prefix
} = require('../prop.json');
const { ModLevel } = require('./kick');



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
                value: `Allowed only for ${ModLevel.Admin}`
            },
                {
                    name: '\u200B',
                    value: '\u200B'
                }, {
                name: `${prefix}ping`,
                value: 'Shows current API Latency'
            })
            .setFooter('Legacy Help Command, Andromeda#6609')

            .setTimestamp()
        message.channel.send(helpEmbed)
    }
}

console.log('Help command loaded');