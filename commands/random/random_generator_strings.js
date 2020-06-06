const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function random(low, high) {
    return Math.random() * (high - low) + low
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'randomstring',
            aliases: ['rng2', 'pick', 'choose'],
            group: 'random',
            memberName: 'randomstring',
            description: 'Random generation between given low and high numbers.',
        });
    }
    async run(msg) {
        const args = msg.content.slice(config.discord.prefix.length).split(' ');
        var rez = random(1, args.length);
        if(rez % 1 != 0) {
            var x = rez % 1;
            rez -= x;
        }
        msg.channel.send(args[rez]);
    }

};