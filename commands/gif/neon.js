const discord = module.require("discord.js");
const neon = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "neon",
  aliases: ["ne"],
  category: "gif",
  usage: "neon",
  description: "random neon gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let ne = neon.ne[Math.floor((Math.random() * neon.ne.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`neon  Gifs`)
      .setImage(ne);
    message.channel.send({ embeds: [embed] });
  },
};
