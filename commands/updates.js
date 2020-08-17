var fs = require("fs");
const mess = require("discord.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = new XMLHttpRequest();

module.exports = {
  name: "update",
  execute(message) {
    fs.readFile("updates.md", function(err, data) {
      if (err) return console.log(err);
      http = new XMLHttpRequest();
      http.open(
        "GET",
        "https://github.com/gabew18/Legacy/blob/master/updates.md",
        true
      );
      http.send();
      text = http.responseText;
      message.reply(data.toString());
    });
  }
};
