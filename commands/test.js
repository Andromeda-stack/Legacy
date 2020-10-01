
/*
	Just a test file, for reading tables, this will be removed down the road, and can be deleted
	without any effect to the rest of the code
*/


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
