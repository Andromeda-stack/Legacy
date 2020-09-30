const chalk = require('chalk');
const test = require('./commands/test');
var sqlite3 = require('sqlite3').verbose();


var db = new sqlite3.Database('./db/user.db', (err) => {
    if (err) {
        return console.error(err.message, err.stack)
    }
    db.run("CREATE TABLE if not exists bannedUser (user TEXT, reason TEXT)");
    db.run("CREATE TABLE if not exists warnedUsers (user TEXT, reason TEXT)");
    //db.run("DROP TABLE warnedUsers")
    console.log(chalk.greenBright(`Connected to Database`));
})


module.exports = db;