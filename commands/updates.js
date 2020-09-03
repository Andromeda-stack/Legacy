var fs = require("fs");
const mess = require("discord.js");
let url = require('../prop.json')

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = new XMLHttpRequest();

module.exports = {
  name: "updates",
  execute(message) {
    fs.readFile("updates.md", function(err, data) {
      if (err) return console.log(err);
      http = new XMLHttpRequest();
      http.open(
        "GET",
        `${url}`,
        true
      );
      http.send();
      text = http.responseText;
      const helpEmbed = new mess.MessageEmbed()
        .setColor(0x28c9d0)
        .setTitle(`Updates and Issues!`)
        .setDescription(data.toString())
        .setFooter("Legacy Audit: Updates");
      message.channel.send(helpEmbed);
    });
  }
};
