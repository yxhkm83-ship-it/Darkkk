const discord = module.require("discord.js");
const anim = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animeboy",
  aliases: ["ab"],
  category: "gif",
  usage: "animeboy",
  description: "random animeboy gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let ag = anim.ag[Math.floor((Math.random() * anim.ag.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`animeboy Gifs`)
      .setImage(ag);
    message.channel.send({ embeds: [embed] });
  },
};
