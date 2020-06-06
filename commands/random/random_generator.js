const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function random(low, high) {
    return Math.random() * (high - low) + low
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'randomnum',
            aliases: ['rng1', 'rand', 'diceroll'],
            group: 'random',
            memberName: 'randomnum',
            description: 'Random generation between given low and high numbers.',
            args: [
                {
                    key: 'lownum',
                    prompt: 'Starting number',
                    type: 'integer', // https://discord.js.org/#/docs/commando/master/class/CommandoRegistry?scrollTo=registerDefaultTypes
                },
                {
                    key: 'highnum',
                    prompt: 'Ending number',
                    type: 'integer', // https://discord.js.org/#/docs/commando/master/class/CommandoRegistry?scrollTo=registerDefaultTypes
                },
            ],
        });
    }
    async run(msg, {lownum, highnum}) {
        var rez = random(lownum, highnum);
        if(rez % 1 == 0) {
            msg.channel.send(rez.toString());
        } else {
            var x = rez % 1;
            rez -= x;
            msg.channel.send(rez.toString());
        }
    }

};