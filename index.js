const fs = require('fs');
const Discord = require('discord.js');
const {
	prefix,
	token
} = require('./prop.json');

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
		console.log("\x1b[32m", "Start up was sucessful");
		console.log(`Prefix: ${prefix}`);
		var d = new Date();
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		console.log(`Start-Up Log: Day is ${days[d.getDay()]}, Time is ${d.getHours()}:${d.getMinutes()}`, "\x1b[0m");
		client.user.setActivity(`${prefix}help, Watching over ${client.guilds.cache.size} guilds!`);

	} catch (startUpError) {
		console.log("\x1b[31m",`Legacy Start Procedure Error: ${startUpError}`, "\x1b[0m")
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

