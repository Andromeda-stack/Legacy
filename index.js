const fs = require("fs");

const Discord = require("discord.js");

const { prefix, token } = require("./prop.json");

const chalk = require("chalk");

const moment = require("moment");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync("./commands")
	.filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log(chalk.greenBright(file.slice(0) + " loaded!"));
}

const gameFiles = fs
	.readdirSync("./games")
	.filter(file => file.endsWith(".js"));

for (const file of gameFiles) {
	const game = require(`./games/${file}`);
	client.commands.set(game.name, game);
	console.log(
		chalk.greenBright("------Games------", "\n", file.slice(0) + " loaded!")
	);
}
client.events = new Discord.Collection();

const eventFiles = fs
	.readdirSync("./events")
	.filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	client.events.set(event.name, event);
	console.log(
		chalk.greenBright("------Events------", "\n", file.slice(0) + " loaded!")
	);
}

client.once("ready", () => {
	try {
		console.log("--------------------------------");
		const d = new Date();
		const ampm = d.getHours() >= 12 ? "PM" : "AM";
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		[
			"Start up was successful",
			`Prefix: ${prefix}`,
			`Start-Up Log: Day is ${days[
			d.getDay()
			]}, Time is ${d.getHours()}:${d.getMinutes()} ${ampm}, Date started is ${moment().format(
				"ll"
			)}`
		].forEach(line => console.log(chalk.greenBright(line)));

		client.user.setActivity(
			`${prefix}help, Watching over ${client.guilds.cache.size} guilds!`
		);
	} catch (startUpError) {
		console.log(chalk.red(`Legacy Start Procedure Error: ${startUpError}`));
	}
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply(
			`There was an error trying to execute command: { ${command} }!`
		);
	}
});

client.events.forEach(r => {
	r.forEach(event => {
		client.on(event.name, event.execute);
	});
});



client.login(token);
