const Discord = require('discord.js');
const clientDisc = new Discord.Client();
const {Command} = require('discord.js-commando');
const config = require('../../Soul.json');

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
        const HelpEmbed = {
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
                    inline: false,
                },
                {
                    name: 'Games',
                    value: '>ticktacktoe: Starts a 2 player game of tick-tack-toe. \n' +
                    'To choose an area type <1-3><A-C> after the game has begun. \n' +
                    '>connect4: Starts a 2 player game of connect 4. \n' +
                    'Players must choose a column <1-7> to place their dots in.',
                    inline: false,
                },
                {
                    name: 'Random',
                    value: '>pun: Responds with a random pun. \n' +
                    '>aww: Responds with an random image of animals. \n' +
                    '>heart: Responds with a blue heart. \n' +
                    '>owo: Use at your own risk. \n' +
                    '>rand (optional <low> <high>): Generates a random number. \n' +
                    '>choose <strings>: Randomly chooses one of the given strings. Strings should be separated only by empty space.',
                    inline: false,
                },
                {
                    name: 'Weather',
                    value: '>weather <city>: Responds with the last current weather for the given city ',
                    inline: false,
                },
            ],
            image: {
                url: '',
            },
            timestamp: new Date(),
            footer: {
                text: `Bot created by SilverDragon.`,
                icon_url: 'https://drive.google.com/uc?export=view&id=10wrtvIKLqom_zCcwYPWEWwZpC-WcdV0c',
            },
        };
        return msg.channel.send({ embed: HelpEmbed});
        
    }
};