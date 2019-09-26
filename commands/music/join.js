const {Command} = require('discord.js-commando');


module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['join', 'enter', 'connect', 'drop_in'],
            group: 'music',
            memberName: 'join',
            description: '',
        });
    }
    async run(msg) {
        if (!msg.guild.voiceConnection) await msg.member.voiceChannel.join();
    }
};