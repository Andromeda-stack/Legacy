const mess = require('discord.js');

module.exports = {
	name: 'purge',
	description: 'Deletes up to 100 messages',
	async execute(message) {
		const roleCheck = message.member.hasPermission('KICK_MEMBERS');
		if (!roleCheck) return message.reply('You must be a Moderator or Higher!');
		const args = message.content.split(' ').slice(1);
		const amountCalledToDelete = args.join(' ');
		if (!amountCalledToDelete) {return message.reply('You must enter a number to delete, *1-100*');}
		if (isNaN(amountCalledToDelete)) {return message.reply('You must provide an actual number');}
		if (amountCalledToDelete > 100) {return message.reply('You can only delete up to **100 messages**');}
		if (amountCalledToDelete < 1) {return message.reply('You must delete at **least 1 message**');}
		try {
			const messages = await message.channel.messages.fetch({
				limit: amountCalledToDelete,
			});

			message.channel.bulkDelete(messages);
			const purgeEmebed = new mess.MessageEmbed()
				.setColor(0x28c9d0)
				.setTitle('Purge')
				.setDescription(`Deleted ${amountCalledToDelete} message/s`)
				.setFooter('Legacy Audit: Purge');
			const newMessage = await message.channel.send(purgeEmebed);
			newMessage.delete({ timeout: 2000 });
		}
		catch (error) {
			console.error(error);
		}
	},
};
