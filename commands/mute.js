
///////////////// broken to helll////////////////////////////////
const mess = require('discord.js')
const {
    prefix
} = require('../prop.json'); // Rework soon

module.exports = {
    name: "mute",
    execute(message) {
        const roleCheck = message.member.hasPermission('KICK_MEMBERS')
        if (!roleCheck) return message.reply("You must be a Moderator or Higher!")
        if (!message.mentions.users.size) return message.reply('You have to mention someone to mute!')
        const taggedUser = message.mentions.users.first();
        if (taggedUser) {
            const role = message.guild.roles.cache.get('721239123490504725').then((role) => {
                const members = message.guild.members.fetch(taggedUser).then(() => {
                    message.member.roles.add(role) // do \@Role here to get the Role ID
                    message.reply(`Muted ${message.author}`)
                })

                    .catch(err => {
                        message.reply(`I couldnt mute ${taggedUser.tag}`)
                    })
            })
        }
    }
}
console.log("Mute command loaded");