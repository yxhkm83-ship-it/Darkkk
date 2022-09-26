const discord = module.require("discord.js");
const emoji = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "emoji",
  aliases: ["em"],
  category: "gif",
  usage: "emoji",
  description: "random emoji gifs",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
    let em = emoji.em[Math.floor((Math.random() * emoji.em.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Emoji  Gifs`)
      .setImage(em);
    message.channel.send({ embeds: [embed] });
  },
};
