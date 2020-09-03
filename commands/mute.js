const mess = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mutes people",

  execute(message) {
    const roleCheck = message.member.hasPermission("KICK_MEMBERS");
    if (!roleCheck)
      return message.channel.send(
        `You must have "Kick Members" to use this command. ${message.author
          .username}`
      );

    if (!message.mentions.users.first())
      return message.channel.send(
        `You have to mention someone! ${message.author.username}`
      );

    const args = message.content.split(" ").slice();
    const kickReason = args.slice(2).join(" ");
    if (!kickReason)
      return message.channel.send(
        `You have to give a reason! ${message.author.username}`
      );

    const checkUserRoles = message.mentions.members.first();
    if (checkUserRoles.roles.cache.some(role => role.name === "Muted Role")) {
      return message.channel.send(
        `${checkUserRoles}, Already has the Muted Role?`
      );
    }
    const role = message.guild.roles.cache.find(
      role => role.name === "Muted Role"
    );

    const user = message.mentions.members.first();
    user.roles.add(role);
    const muteEmbed = new mess.MessageEmbed()
      .setColor(0x28c9d0)
      .addFields(
      {
        name: 'User Muted',
        value: `Muted ${user}. Reason: ${kickReason}`
      },
      {
        name: 'Staff',
        value: `${message.author.username}`
      })
      .setFooter("Legacy Audit: Mute");
    message.channel.send(muteEmbed);
  }
};
