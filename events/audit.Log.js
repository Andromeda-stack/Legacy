
const mess = require('discord.js')

module.exports = [{
    name: 'guildMemberAdd',
    execute(member){
        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle(`${member.user.tag} (${member.id})`)

        .setDescription('Joined the guild!')

        .setFooter('Legacy Audit: Joined')

        .setTimestamp()
        member.guild.channels.cache.get('719075091727777873').send(helpEmbed)
    }
},{
    name: 'guildMemberRemove',
    execute(member){
        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle(`${member.user.tag} (${member.id})`)

        .setDescription('Left the Guild!')

        .setFooter('Legacy Audit: Left')

        .setTimestamp()
        member.guild.channels.cache.get('719075091727777873').send(helpEmbed)
    }
},{
    name: 'messageDeleteBulk',
    execute(messages){
        const message = messages.first()
        const deleteMessage = messages.last()
        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle(deleteMessage.member.displayName)

        .setDescription(messages.array().length)

        .setFooter('Legacy Audit: Joined')

        .setTimestamp()

        message.guild.channels.cache.get('719075091727777873').send(helpEmbed)
       
    }
}]

console.log('Audit Log loaded');