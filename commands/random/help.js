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
        return msg.channel.send("```" +
        ">help: help command. \n\n" +
        "Music commands: \n" +
        ">join: Joins voice channel you are currently in. \n" +
        ">leave: Leaves current voice channel. \n" +
        ">play (URL): Plays given URL. \n" +
        ">skip: Skips currently playing song. \n" +
        ">stop: Stops all songs in queue. \n" +
        ">volume: Sets the volume of the music. \n\n" +
        "Random commands:\n" +
        ">heart: big heart command. \n" +
        ">owo: Use at your own risk. \n" +
        ">pun: Receive a random pun." +
        "```");
    }
};