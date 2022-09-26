const discord = module.require("discord.js");
const smo = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "smoking",
  aliases: ["sm"],
  category: "gif",
  usage: "smoking",
  description: "random smoking gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let sm = smo.sm[Math.floor((Math.random() * smo.sm.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Smoking Gifs`)
      .setImage(sm);
    message.channel.send({ embeds: [embed] });
  },
};
