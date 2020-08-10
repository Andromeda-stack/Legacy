const mess = require("discord.js");
const funcs = require("../functions/funcs");

module.exports = {
  name: "kick",
  description: "Kicks users from the guild",
  execute(message) {
    const roleCheck = message.member.hasPermission("KICK_MEMBERS");
    const args = message.content.split(" ").slice(1);
    const kickReason = args.slice(1).join(" ");
    if (!roleCheck)
      return message.reply('You must have "Kick Members" to use this command');
    if (!message.mentions.users.size) {
      return message.reply("You have to tag someone to kick!");
    }
    const taggedUser = message.mentions.users.first();
    if (taggedUser) {
      const mem = message.guild.member(taggedUser);
      if (!kickReason) return message.reply("You must provide a reason!");
      if (mem) {
        mem
          .kick({
            reason: `${kickReason}`
          })
          .then(() => {
            message.reply(
              `:boot: **Successfully kicked ${
                taggedUser.tag
              }** for Reason: **${kickReason}**`
            );
          })
          .catch(err => {
            message.reply(`I couldn't kick ${taggedUser.tag}`);
          });
      }
    }
  }
};

console.log("Kick command loaded");
