const chalk = require('chalk');
var sqlite3 = require('sqlite3').verbose();


var db = new sqlite3.Database('./db/user.db', (err) => {
    if (err) {
        return console.error(err.message, err.stack)
    }
    db.run("CREATE TABLE if not exists bannedUser (user TEXT, reason TEXT)");
    console.log(chalk.greenBright(`Connected to Database`));
})



module.exports = db;