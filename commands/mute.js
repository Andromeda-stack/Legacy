console.log("Mute command loaded");
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
            const members = message.guild.member(taggedUser).then(() => {
                message.member.roles.add('635099199234375691') // do \@Role here to get the Role ID
                message.reply(`Muted ${message.author}`)
            })

            .catch(err => {
                message.reply(`I couldnt mute ${taggedUser.tag}`)
            })
        }
    }
}
