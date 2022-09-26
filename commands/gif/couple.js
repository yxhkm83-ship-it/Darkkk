const discord = module.require("discord.js");
const couple = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "couple ",
  aliases: ["cp"],
  category: "gif",
  usage: "couple ",
  description: "random couple gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let cp = couple.cp[Math.floor((Math.random() * couple.cp.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`couple  Gifs`)
      .setImage(cp);
    message.channel.send({ embeds: [embed] });
  },
};
