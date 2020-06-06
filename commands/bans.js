console.log("Bans command loaded");

module.exports = {
    name: 'ban',
    description: 'Bans bad people',
    execute(message) {
        const roleCheck = message.member.hasPermission('BAN_MEMBERS')
        const args = message.content.split(' ').slice(1);
        const banReason = args.slice(1).join(' ');

        if (!roleCheck) return message.reply('You must be an admin!')
        if (!message.mentions.users.size) return message.reply('You have to mention someone to ban!')

        const taggedUser = message.mentions.users.first();
        if (taggedUser) {
            const member = message.guild.member(taggedUser)
            if (!banReason) return message.reply("You must provide a reason!")
            if (member) {
                member

                    .ban({
                        reason: `${banReason}`
                    })

                    .then(() => {
                        message.reply(`:hammer: **Successfully banned ${taggedUser.tag}**`)
                    })

                    .catch(err => {
                        message.reply(`I couldnt ban ${taggedUser.tag}`)
                    })
            } 
        }
    }
}