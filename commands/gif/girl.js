const discord = module.require("discord.js");
const axios = require("axios");
const { color } = require("../../config.json");

module.exports = {
  name: "girl",
  aliases: ["woman"],
  category: "gif",
  usage: "girl",
  description: "random girl/woman gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 axios.get("https://api.roxza.me/v1/random?type=woman")
     .then(res => {
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Girl/Woman Gifs`)
      .setImage(res.data.url);
    message.channel.send({ embeds: [embed] });
      })
  },
};
