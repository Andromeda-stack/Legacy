const mess = require("discord.js");
const { welcome } = require("../prop.json");

module.exports = [{
        name: "guildMemberAdd",
        execute(member, message) {
            const helpEmbed = new mess.MessageEmbed()

            .setColor(0x28c9d0)

            .setTitle(`${member.user.tag} (${member.id})`)

            .setDescription("Joined the guild!")

            .setFooter("Legacy Audit: Joined")

            .setTimestamp();
            member.guild.channels.cache.find(channel => channel.name === welcome).send(helpEmbed);
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
            member.guild.channels.cache.find(channel => channel.name === welcome).send(helpEmbed); // u can replace `welcome` as a string, instead of parsing through a json file.
        }
    }
];