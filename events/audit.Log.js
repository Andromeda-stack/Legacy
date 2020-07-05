
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
        const deleteMessage = messages.last() // known issue with getting author of the command 
        
        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle('Purge Command used!')

        .setDescription(`${deleteMessage.member.displayName} << Please ignore the author/s name who used the command for the time being!, Deleted ${messages.array().length}`)

        .setFooter('Legacy Audit: Purge')

        .setTimestamp()

        message.guild.channels.cache.get('719075091727777873').send(helpEmbed)
       
    }
},{
    name: 'roleCreate',
    execute(message){
       const role = message.guild.roles.fetch(role.name)

        const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28C9D0)

        .setTitle('New Role Created!')

        .setDescription(`A new role was created ${role}`)

        .setFooter('Legacy Audit: Created Role')

        .setTimestamp()

        message.guild.channels.cache.get('719075091727777873').send(helpEmbed)       
    }
}]

console.log('Audit Log loaded');