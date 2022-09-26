const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "botinfo",
  aliases: ["stats"],
  usage: "botinfo",
  description: "Bot Info",
  category: "bot",
  run: async (client, message, args) => {

        let embed = new Discord.MessageEmbed()
        .setAuthor("Proton 📊") 
        .setColor(color)
        .addField('❯ WebSocket Ping:', `\`\`\`${client.ws.ping}ms\`\`\``, true)
        .addField('❯ Memory:', `\`\`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\`\`\``, true)
        .addField('❯ Guild Count:', `\`\`\`${client.guilds.cache.size} guilds\`\`\``, true)
        .addField(`❯ User Count:`, `\`\`\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}, users\`\`\``, true)
        .addField('❯ Commands:', `\`\`\`${client.commands.size} cmds\`\`\``,true)
        .addField('❯ Node:', `\`\`\`${process.version} on ${process.platform} ${process.arch}\`\`\``, true)
        .addField('❯ Cached Data:', `\`\`\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}, users\n${client.emojis.cache.size}, emojis\`\`\``, true)
        .addField('❯ Discord.js:', `\`\`\`v13\`\`\``, true)
        .setTimestamp()
        .setFooter({ text: "Developer: Matheros#2989" })


  let menumsg = await message.channel.send({ embeds: [embed]});    
  }
}
