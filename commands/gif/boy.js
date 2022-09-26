const discord = module.require("discord.js");
const axios = require("axios");
const { color } = require("../../config.json");

module.exports = {
  name: "boy",
  aliases: ["man"],
  category: "gif",
  usage: "boy",
  description: "random boy/man gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
 axios.get("https://api.roxza.me/v1/random?type=man")
     .then(res => {
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Boy/Man Gifs`)
      .setImage(res.data.url);
    message.channel.send({ embeds: [embed] });
      })
  },
};
