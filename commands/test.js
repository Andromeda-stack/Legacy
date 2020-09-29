const db = require("../config");

module.exports = {
    name: "db",
    execute(message) {
        db.serialize(() => {
            db.each(`SELECT User user,
                    Reason reason
					 FROM bannedUser`, (err, row) => {
                if (err) {
                    console.error(err.message);

                }
                message.channel.send(row.user + "\t```" + row.reason + "```");
            });
        });
    }
}