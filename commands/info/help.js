const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "help",
  aliases: ["aid", "hlp"],
  usage: "help",
  description: "Sends a menu with options!",
  category: "bot",
  run: async (client, message, args) => {

    let emoji = "<:CheckMark:899924234061631509>"

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select the Category!')
          .addOptions([
            {
              label: 'Moderation Commands',
              description: 'Click here to see Moderation commands',
              value: 'yakam',
              emoji: '1013801457268559872',
            },
            {
              label: 'Slash commands',
              description: 'Click to see the slash commands',
              value: 'duam',
              emoji: '1013801433243582464',
             
            },
            {
              label: 'Information Commands',
              description: 'Click to see the information commands',
              value: 'seyam',
              emoji: '1013801327140294727',
            },
            {
              label: 'Gif Commands',
              description: 'Click to see the Gif commands',
              value: 'chuaram',
              emoji: '1013801413786206300',
            },
            {
              label: 'Photo Commands',
              description: 'Click to see the Photo commands',
              value: 'penjam',
              emoji: '1013801389794803783',
            },
	    {
              label: 'Text Commands',
              description: 'Click to see the Text commands',
              value: 'shasham',
              emoji: '1013801370291273908',
            },
            {
              label: 'Fun Commands',
              description: 'Click to see the Fun commands',
              value: 'hawtam',
              emoji: '1013802580486402079',
            },
            {
              label: 'Utility Commands',
              description: 'Click to see the Utility commands',
              value: 'hashtam',
              emoji: '1013801350968135711',
            },



          ]),
      )

		  const invite = new MessageButton()
					.setLabel('Invite Me')
					.setStyle('LINK')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=2650171494&scope=bot%20applications.commands")
      

		  const server = new MessageButton()
					.setLabel('Support Server')
					.setStyle('LINK')
          .setURL("https://discord.gg/nqsFVcGBJN")
      

      const row1 = new MessageActionRow()
      .addComponents([invite, server])


     let embed = new Discord.MessageEmbed()
      .setColor(color)
       .setTitle(`**__Bot Features__**`) 
       .setDescription(`👋 Hello ${message.author.username}, Im glad to see you're using me!\n\n🏷️ My Prefix Is: [**\`-\`**]\n🔖 Also You can Use Slash: [**\`/\`**]\n\n❔ If you have any **\`suggest/feedback/quesstions\`** - [Join To our Sever](https://discord.gg/nqsFVcGBJN)\n`)
       .addField("📋 About Me:", `Im ${client.user.username} a discord multi-purpose bot that does: **Moderation**, **Info**, **Gif**, **Photos**, **Text**, **Funny**, **Utility** and much more things as soon..`)	
      .setThumbnail(client.user.displayAvatarURL())

    let menumsg = await message.channel.send({ embeds: [embed], components: [row, row1] });

    let embed1 = new MessageEmbed()
      .setTitle("Moderation Commands")
      .addField("Availby:", `ban, kick, mute, purge, role, slowmode,  unban, unmute, warn`)
      .addField("Not Availby:", `snipe, lock, unlock`)
      .setColor(color)



    let embed2 = new MessageEmbed()
      .setTitle("Slash Commands")
      .setDescription("Soon")
      .setColor(color)



    let embed3 = new MessageEmbed()
      .setTitle("Info Commands")
      .addField("Availby:", `botinfo, bugreport, help, invite, ping`)
      .setColor(color)

      let embed4 = new MessageEmbed()
      .setTitle("Gif Commands")
      .addField("Availby:", `anime, animeboy, animal, emoji, couple, boy, girl, sad, neon, smoking`)
    //  .addField("", ``)
      .setColor(color)
 
      let embed5 = new MessageEmbed()
      .setTitle("Photo Commands")
      .addField("Availby:", `panimal, pbaby, pboy, pemoji, pgirl, panimeboy, pdrain, pcar, pmoney`)
      .setColor(color)
      
      let embed6 = new MessageEmbed()
      .setTitle("Text Commands")
      .addField("Availby:", `textarabic, textenglish, textkurdish, textpersian, textturkish, textspanish, textitalian\n**Aliases:** ta, te, tk, tp, tr, ts, ti`)
      .setColor(color)
      
      let embed7 = new MessageEmbed()
      .setTitle("Fun Commands")
      .addField("Availby:", `ascii, calculator, catsay, clap, cowsay, dab, emojify, fliptext, greentext, hack, hug, joke, kill, meme, respect, reverse, rickroll, roast`)     
      .setColor(color)

      let embed8 = new MessageEmbed()
      .setTitle("Utility Commands")
      .addField("Availby:", `avatar, google, imdb, say, servericon, serverinfo, translate, userinfo, weather, wiki`)
      .setColor(color)



      




    const filter = (interaction) => interaction.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({
      filter,
      componentType: "SELECT_MENU"
    });


    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "yakam") {
        collected.reply({ embeds: [embed1], ephemeral: true })
      }
      if (value === "duam") {
        collected.reply({ embeds: [embed2], ephemeral: true })
      }
      if (value === "seyam") {
        collected.reply({ embeds: [embed3], ephemeral: true })
      }
      if (value === "chuaram") {
        collected.reply({ embeds: [embed4], ephemeral: true })
      }
     if (value === "penjam") {
        collected.reply({ embeds: [embed5], ephemeral: true })
      }
     if (value === "shasham") {
        collected.reply({ embeds: [embed6], ephemeral: true })
      }
      if (value === "hawtam") {
        collected.reply({ embeds: [embed7], ephemeral: true })
      }
      if (value === "hashtam") {
        collected.reply({ embeds: [embed8], ephemeral: true })
      }


    })

  }
}
