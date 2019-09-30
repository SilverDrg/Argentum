const {Command} = require('discord.js-commando');


module.exports = class LeaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            aliases: ['disconnect', 'away', 'begone_thot', 'begone'],
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel that it currently resides in.',
        });
    }
    async run(msg) {
        if (msg.guild.voiceConnection) await msg.guild.voiceConnection.disconnect();
    }
};