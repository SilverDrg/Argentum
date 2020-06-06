const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function random(low, high) {
    return Math.random() * (high - low) + low
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ticktacktoe',
            aliases: ['row3'],
            group: 'games',
            memberName: 'ticktacktoe',
            description: 'Classic game of tick-tack-toe',
        });
    }
    async run(msg) {
        var stop = false;
        while(!stop) {
            
        }
        msg.channel.send('Tick-tack-toe is a work in progress.');
    }

};