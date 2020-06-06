console.log("Mute command loaded");

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
            const members = message.guild.member(taggedUser)
            if (members) {
                members

                    .then(() => {
                        message.member.roles.add('635099199234375691') // do \@Role here to get the Role ID
                        message.reply(`Muted ${message.author}`)
                    })

                    .catch(err => {
                        message.reply(`I couldnt mute ${taggedUser.tag}`)
                    })
            }
        }
    }
}



/*module.exports = {
    name: "mute-info",
    description: 'Mutes users, w/o reason or set time YET, Mute command is in development', // rework soon
    execute(message) {
        const muteInfo = new mess.MessageEmbed()
            .setTitle(this.name)

            .setColor(0x28C9D0)

            .addFields({
                name: 'Description',
                value: `${this.description}`,

                name: 'Usage',
                value: `${prefix}mute @{Users-mention}`
            })

            .setFooter('Legacy Mute Info, LiftFork#6609')

            .setTimestamp()

        message.channel.send(muteInfo)
    }
}*/