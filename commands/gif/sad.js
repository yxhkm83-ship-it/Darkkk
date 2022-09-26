const discord = module.require("discord.js");
const sad = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "sad",
  aliases: ["sa"],
  category: "gif",
  usage: "sad",
  description: "random sad gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let sa = sad.sa[Math.floor((Math.random() * sad.sa.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Sad  Gifs`)
      .setImage(sa);
    message.channel.send({ embeds: [embed] });
  },
};
