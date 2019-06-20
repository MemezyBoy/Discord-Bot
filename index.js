const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTkwODI0MDMyMzEyNDkyMDQy.XQn2Pw.74Ou2jFpkvd0YFI1xbXLVg5VACY'

const prefix = '.';

const version = '1.0.0'

bot.on('ready', () => {
    console.log('this bot exist yay')
    bot.user.setActivity('Prefix "." [] .help')
})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === 'shadowspin-community');
    if (!channel) return;

    channel.send(`Welcome to our server, ${member}! Don't forget to read the rules located in #rules! Have fun!`)

});



bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {

        case 'info':

            const embed = new Discord.RichEmbed()
                .setTitle('User Info')
                .addField('Username', message.author.username)
                .addField('Version', version)
                .addField('Current Server', message.guild.name)
                .setColor('3498DB')
                .setThumbnail(message.author.avatarURL)
                .setFooter('i swear to god i will touch you')
            message.channel.sendEmbed(embed);
            break;
    }
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {

        case 'help':

            const embed = new Discord.RichEmbed()
                .setTitle('Help Section')
                .addField('Creator', 'do you believe in magic#6736')
                .addField('Version', version)
                .addField('Commands', 'https://docs.google.com/document/d/17jGWMjLHXDC6jEkMcEpAufCKoeoniL6aEmt5ocazHKU/edit?usp=sharing')
                .setColor('3498DB')
                .setFooter('yo man wassap')
            message.channel.sendEmbed(embed);
            break;
    }
})

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'kick':
            if(!args[1]) message.channel.send('Error! No user specified and/or user does not exist.')

            const user = message.mentions.users.first();

            if(user){

                const member = member.guild.member(user);
                member.kick('You have been kiked from '+ message.guild.name).then(()=>{
                    message.reply(`Successfully kicked ${user.tag} from the server!`);
                })
            }
      break;      
    }
    
    
});

bot.login(token);