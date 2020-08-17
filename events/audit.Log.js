const mess = require("discord.js");

module.exports = [
  {
    name: "guildMemberAdd",
    execute(member) {
      const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28c9d0)

        .setTitle(`${member.user.tag} (${member.id})`)

        .setDescription("Joined the guild!")

        .setFooter("Legacy Audit: Joined")

        .setTimestamp();
      member.guild.channels.cache.get("743231991897522256").send(helpEmbed);
    }
  },
  {
    name: "guildMemberRemove",
    execute(member) {
      const helpEmbed = new mess.MessageEmbed()

        .setColor(0x28c9d0)

        .setTitle(`${member.user.tag} (${member.id})`)

        .setDescription("Left the Guild!")

        .setFooter("Legacy Audit: Left")

        .setTimestamp();
      member.guild.channels.cache.get("743231991897522256").send(helpEmbed);
      
    }
  }
];
