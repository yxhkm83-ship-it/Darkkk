const discord = module.require("discord.js");
const baby = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pbaby",
  aliases: ["kids"],
  category: "photo",
  usage: "pbaby",
  description: "random baby photos",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    
  let bb = baby.bb[Math.floor((Math.random() * baby.bb.length))];
    
    let embed = new discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Baby Photos`)
      .setImage(bb);
    message.channel.send({ embeds: [embed] });
  },
};
