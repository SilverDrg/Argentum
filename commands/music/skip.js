const {Command} = require('discord.js-commando');


module.exports = class SkipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'skip',
            aliases: ['next'],
            group: 'music',
            memberName: 'skip',
            description: 'Skips the currently playing video.',
        });
    }
    
    async run(msg) {
        const serverQueue = msg.client.music.get(msg.guild.id);
        
        if (!msg.member.voiceChannel) {
            return msg.channel.send('You have to be in a voice channel to skip the song.');
        }
        if (!serverQueue) {
            return msg.channel.send('There is no song to skip.')
        }
        serverQueue.connection.dispatcher.end();
    }
};