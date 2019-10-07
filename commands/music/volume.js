const {Command} = require('discord.js-commando');


module.exports = class VolumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'volume',
            aliases: ['volume'],
            group: 'music',
            memberName: 'volume',
            description: 'Changes the volume.',
            args: [
                {
                    key: 'volume',
                    prompt: 'What volume would you like the music to be?',
                    type: 'integer', // https://discord.js.org/#/docs/commando/master/class/CommandoRegistry?scrollTo=registerDefaultTypes
                    validate: volume => volume <= 100 && volume >= 0, // 100 is max, 0 is min
                },
            ],
        });
    }
    
    async run(msg, { volume }) {   
        const serverQueue = msg.client.music.get(msg.guild.id);
        serverQueue.musicPlayer.setVolumeLogarithmic(volume / 100);
        msg.channel.send("Volume has been set to " + volume);
    }
};