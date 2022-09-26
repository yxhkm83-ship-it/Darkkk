const discord = module.require("discord.js");
const animal = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animal",
  aliases: ["an"],
  category: "gif",
  usage: "animal",
  description: "random animal gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Animal Gifs`)
      .setImage(an);
    message.channel.send({ embeds: [embed] });
  },
};
