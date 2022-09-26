const discord = module.require("discord.js");
const axios = require("axios");
const { color } = require("../../config.json");

module.exports = {
  name: "anime",
  aliases: ["am"],
  category: "gif",
  usage: "anime",
  description: "random anime gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 axios.get("https://api.roxza.me/v1/random?type=anime")
     .then(res => {
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Anime Gifs`)
      .setImage(res.data.url);
    message.channel.send({ embeds: [embed] });
      })
  },
};
