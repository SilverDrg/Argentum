const {Command} = require('discord.js-commando');


module.exports = class StopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            aliases: ['stop'],
            group: 'music',
            memberName: 'stop',
            description: 'No',
        });
    }
    
    async run(msg) {
        const serverQueue = msg.client.music.get(msg.guild.id);
        
        if (!msg.member.voiceChannel) {
            return msg.channel.send('You have to be in a voice channel to stop playing music.');
        }
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
};