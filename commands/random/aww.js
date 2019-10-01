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

function random(low, high) {
    return Math.random() * (high - low) + low
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'aww',
            aliases: ['cute', 'adorb', 'animals'],
            group: 'random',
            memberName: 'aww',
            description: 'Cute stuff appear.',
        });
    }
    async run(msg) {
        let sub = await reddit.getSubreddit('aww').getRandomSubmission({time: 'all', limit: 1}).then((res) => {
            return {
                title: res.title,
                url: res.url,
                body: res.body
            }
        });
        msg.reply(sub.title + "\n" + sub.url);
    }

};