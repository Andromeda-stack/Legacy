console.log("Purge command loaded");



module.exports = {
    name: "purge",
    description: "Deletes upto 100 messages",
    async execute(message) {
        const roleCheck = message.member.hasPermission('KICK_MEMBERS')
        if (!roleCheck) return message.reply("You must be a Moderator or Higher!");
        const args = message.content.split(' ').slice(1);
        const amountCalledToDelete = args.join(' ');
        if (!amountCalledToDelete) return message.reply("You must enter a number to delete, *1-100*")
        if (isNaN(amountCalledToDelete)) return message.reply("You must a actual number");
        if (amountCalledToDelete > 100) return message.reply("You can only delete upto **100 messages**");
        if (amountCalledToDelete < 1) return message.reply("You must delete at **least 1 message**");

        await message.channel.messages.fetch({
            limit: amountCalledToDelete
        }).then(messages => {
            message.channel.bulkDelete(messages);
            message.channel.send(`Deleted ${amountCalledToDelete} message/s`);

        })
    }
}