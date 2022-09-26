const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "invite",
  aliases: ["links"],
  usage: "invite",
  description: "Invites Link",
  category: "bot",
  run: async (client, message, args) => {


      const invite = new MessageButton()
					.setLabel('Invite the bot')
					.setStyle('LINK')
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=2650171494&scope=bot%20applications.commands`)
      

		  const server = new MessageButton()
					.setLabel('Support server')
					.setStyle('LINK')
          .setURL("https://discord.gg/nqsFVcGBJN")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle("**Click on the Buttons for each link**")
      
  let menumsg = await message.channel.send({ embeds: [embed], components: [ row1] });
   
  }
}
