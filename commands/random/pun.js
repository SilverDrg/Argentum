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
        let sub = await reddit.getSubreddit('Puns').getRandomSubmission().then((res) => {
            return {
                title: res.title,
                url: res.url,
                body: res.body
            }
        });
        console.log(sub);
        msg.channel.send(sub.title + "\n" + sub.url);
    }
};