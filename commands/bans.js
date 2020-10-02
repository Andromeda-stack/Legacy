const db = require("../config");

const mess = require("discord.js");

module.exports = {
    name: "ban",
    description: "Bans bad people",
    execute(message) {
        const roleCheck = message.member.hasPermission("BAN_MEMBERS");
        const args = message.content.split(" ").slice(1);
        const banReason = args.slice(1).join(" ");

        if (!roleCheck) return message.reply("You must be an admin!");
        if (!message.mentions.users.size) return message.reply("You have to mention someone to ban!");

        const taggedUser = message.mentions.users.first();
        if (taggedUser) {
            const member = message.guild.member(taggedUser);
            if (!banReason) return message.reply("You must provide a reason!");
            if (member) {
                member

                    .ban({
                    //reason: `${banReason}`
                })

                .then(() => {
                        const banEmbed = new mess.MessageEmbed()
                            .setColor(0x28c9d0)
                            .setTitle(`User Banned!`)
                            .addFields({
                                name: "User Banned",
                                value: `${taggedUser.tag}`,
                                inline: true
                            }, { name: "Reason", value: `${banReason}`, inline: true }, {
                                name: "Staff",
                                value: `${message.author.username}`,
                                inline: true
                            })
                            .setTimestamp()
                            .setFooter("Legacy Audit: Ban");

                        message.channel.send(banEmbed);
                    })
                    .catch(err => {
                        message.reply(`I couldn't ban ${taggedUser.tag}`);
                    });

                db.serialize(function() {

                    db.run('INSERT INTO bannedUser VALUES (?,?)', [taggedUser, banReason], function(err) {
                        if (err) {
                            return console.log(err.message)

                        }
                    })

                })

            }
        }
    }
};