const fs = require('fs');
const Discord = require('discord.js');
const {
	prefix,
	token
} = require('./prop.json');

const chalk = require('chalk')
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.events = new Discord.Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	client.events.set(event.name, event);
}

client.once('ready', () => {
	try {
		console.log("--------------------------------")
		var d = new Date();
		var ampm = (d.getHours() >= 12) ? "PM" : "AM";
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		[
			"Start up was sucessful",
			`Prefix: ${prefix}`,
			`Start-Up Log: Day is ${days[d.getDay()]}, Time is ${d.getHours()}:${d.getMinutes()} ${ampm}`
		].forEach(line => console.log(chalk.green(line)))
		client.user.setActivity(`${prefix}help, Watching over ${client.guilds.cache.size} guilds!`);

	} catch (startUpError) {
		console.log(chalk.red(`Legacy Start Procedure Error: ${startUpError}`))
	}
})




client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.events.forEach((r) => {
	r.forEach((event) => {
		client.on(event.name, event.execute)
	})
})

client.login(token)

