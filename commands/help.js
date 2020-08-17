const mess = require("discord.js");

const { prefix } = require("../prop.json");

module.exports = {
  name: "help",
  description: "Simple help embed",
  execute(message) {
    const helpEmbed = new mess.MessageEmbed()

      .setColor(0x28c9d0)

      .setTitle(message.guild)

      .addFields(
        {
          name: `${prefix}purge {1-100}`,
          value: "Deletes up to 100 messages, **Mods + Admins**"
        },
        {
          name: `${prefix}mute`,
          value: "Mutes members, **Mods + Admins**"
        },
        {
          name: `${prefix}ban`,
          value: "Bans members, **Mods + Admins**"
        },
        {
          name: `${prefix}kick`,
          value: `Kick members, **Mods + Admins**`
        },
        {
          name: "\u200B",
          value: "\u200B"
        },
        {
          name: `${prefix}flip`,
          value: "Heads or Tails Game!"
        },
        {
          name: `${prefix}updates`,
          value: "Current Bugs and Updates!"
        },
        {
          name: `${prefix}ping`,
          value: "Shows current API Latency"
        }
      )
      .setFooter("Legacy Help Command, Andromeda#6609")

      .setTimestamp();
    message.channel.send(helpEmbed);
  }
};


