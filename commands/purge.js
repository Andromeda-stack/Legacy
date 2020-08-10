module.exports = {
  name: "purge",
  description: "Deletes up to 100 messages",
  async execute(message) {
    const roleCheck = message.member.hasPermission("KICK_MEMBERS");
    if (!roleCheck) return message.reply("You must be a Moderator or Higher!");
    const args = message.content.split(" ").slice(1);
    const amountCalledToDelete = args.join(" ");
    if (!amountCalledToDelete)
      return message.reply("You must enter a number to delete, *1-100*");
    if (isNaN(amountCalledToDelete))
      return message.reply("You must provide an actual number");
    if (amountCalledToDelete > 100)
      return message.reply("You can only delete up to **100 messages**");
    if (amountCalledToDelete < 1)
      return message.reply("You must delete at **least 1 message**");
    try {
      let messages = await message.channel.messages.fetch({
        limit: amountCalledToDelete
      });
      message.channel.bulkDelete(messages);
      let newMessage = await message.channel.send(
        `Deleted ${amountCalledToDelete} message/s`
      );
      newMessage.delete({ timeout: 2000 });
    } catch (error) {
      console.error(error);
    }
  }
};

console.log("Purge command loaded");
