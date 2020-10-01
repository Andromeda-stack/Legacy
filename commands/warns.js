const db = require("../config")



module.exports = {
    name: "warn",
    execute(message) {
        const roleCheck = message.member.hasPermission("KICK_MEMBERS");
        const args = message.content.split(" ").slice(1);
        const warnReason = args.slice(1).join(" ");
        if (!roleCheck)
            return message.reply('You must be a moderator to use this command');
        if (!message.mentions.users.size) {
            return message.reply("You have to tag someone to warn!");

        }
        const taggedUser = message.mentions.users.first();
        if (taggedUser) {
            if (!warnReason) return message.reply("You must provide a reason!");
        }
        db.serialize(function() {
            db.run('INSERT INTO warnedUsers VALUES (?,?)', [taggedUser, warnReason], function(err) {
                if (err) {
                    return message.channel.send("There was an issue logging warning into database.....:cry:")
                } else {
                    return message.channel.send(`**Warning**: ${taggedUser}\n` + `You have received a warning for: ` + "````" + warnReason + "```")
                }

            })
        })
    }
}