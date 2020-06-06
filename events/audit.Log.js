
const mess = require('discord.js')
module.exports = [{
    name: 'guildMemberAdd',
    execute(member){
        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle(`${member.user.tag} (${member.id})`)

        .setDescription('Joined the guild!')

        .setFooter('Legacy Help Command, LiftFork#6609')

        .setTimestamp()
        member.guild.channels.cache.get('704891091001933855').send(helpEmbed)
    }
}]

