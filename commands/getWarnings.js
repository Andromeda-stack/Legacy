const { ReactionUserManager } = require("discord.js");
const db = require("../config");

module.exports = {
    name: 'warns',
    execute(message) {

        const taggedUser = message.mentions.users.first();
        if (taggedUser == null) {
            message.channel.send(`${message.author}, you must tag someone to see their warnings!`)
        }

        db.serialize(() => {
            db.each(`SELECT User user,
                    Reason reason
					 FROM warnedUsers WHERE user=(?)`, [taggedUser], (err, row) => {
                if (err) {
                    console.error(err.message);

                }
                //message.channel.send(row.user + "\t```" + Array.isArray(row.reason) ? row.reason.join() : `${row.reason.toString()}\`\`\``);
                //const msg = `**Warnings:**\n` + row.reason.join()
                //message.channel.send(`**Warnings:**\n` + rows.map(row => `- ${row.reason}`).join('\n'))

            });
        });
    }
}