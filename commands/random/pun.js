const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');
const reddit = new snoowrap({
    userAgent: config.reddit.userAgent,
    clientId: config.reddit.clientId,
    clientSecret: config.reddit.clientSecret,
    username: config.reddit.username,
    password: config.reddit.password
});

module.exports = class PunCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pun',
            aliases: ['dadjoke', 'joke'],
            group: 'random',
            memberName: 'pun',
            description: 'Gives you are random pun.',
        });
    }
    async run(msg) {
        let sub = await reddit.getSubreddit('Puns').getRandomSubmission({time: 'all', limit: 1}).then((res) => {
            return {
                title: res.title,
                url: res.url,
                body: res.body
            }
        });
        //const exampleEmbed = new Discord.RichEmbed()
        //.setTitle(sub.title)
        //.setImage(sub.url)
        //msg.send(exampleEmbed);
        console.log(sub);
        msg.channel.send(sub.title + "\n" + sub.url);
    }
};