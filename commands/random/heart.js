const {Command} = require('discord.js-commando');


module.exports = class HeartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'heart',
            aliases: ['heart'],
            group: 'random',
            memberName: 'heart',
            description: 'Gives a big blue heart.',
        });
    }
    async run(msg) {
        return msg.channel.send("'           :blue_heart::blue_heart::blue_heart:                   :blue_heart::blue_heart::blue_heart:\n" +
            "      :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:       :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "       :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "             :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                   :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                         :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                               :blue_heart::blue_heart::blue_heart:\n" +
            "                                     :blue_heart:");
    }
};