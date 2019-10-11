const {Command} = require('discord.js-commando');


module.exports = class HeartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['help'],
            group: 'random',
            memberName: 'help',
            description: 'Lists all available commands.',
        });
    }
    async run(msg) {
        const WeatherEmbed = {
            color: 0x0099ff,
            title: 'Help',
            url: '',
            author: {
                name: 'Argentum',
                icon_url: '',
                url: '',
            },
            description: 'All available commands.',
            thumbnail: {
                url: 'https://drive.google.com/uc?export=view&id=1e_-UH08vuK07EcqIWFVGv_OUapBtfEwx',
            },
            fields: [
                {
                    name: '\u150b',
                    value: '\u150b',
                },
                {
                    name: 'Music commands',
                    value: '>Join: Joins your current voice channel. \n' + 
                    '>leave: Diconnects from the voice channel. \n' +
                    '>play <url>: Plays the given url. \n' +
                    '>skip: Skips the music currently playing. \n' +
                    '>stop: Stops playing and deletes the queue. \n' +
                    '>volume: Set the play volume (from 1 to 100).',
                    inline: true,
                },
                {
                    name: 'Random',
                    value: '>pun: Responds with a random pun. \n' +
                    '>aww: Responds with an random image of animals. \n' +
                    '>heart: Responds with a blue heart. \n' +
                    '>owo: Use at your own risk.',
                    inline: true,
                },
                {
                    name: 'Weather',
                    value: '>weather <city>: Responds with the last current weather for the given city ',
                    inline: true,
                },
            ],
            image: {
                url: '',
            },
            timestamp: new Date(),
            footer: {
                text: 'Please wait 1 min before using the command again.',
                icon_url: '',
            },
        };
        return msg.channel.send({ embed: WeatherEmbed});
        
    }
};