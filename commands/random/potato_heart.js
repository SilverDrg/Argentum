
const {Command} = require('discord.js-commando');
const Discord = require('discord.js');
const clientDisc = new Discord.Client();

const dai = "<:daitato:765982332876226611>";//clientDisc.emojis.find(emoji => emoji.name == "daitato");
const sudo = "<:sudotato:765982352077357067>";//clientDisc.emojis.find(emoji => emoji.name == "sudotato");
const der = "<:dertato:741456505194152039>";
const silverHeart = "<:SilverHeart:760213688459984907>";

module.exports = class HeartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'potato_heart',
            aliases: ['potatoes', 'potets'],
            group: 'random',
            memberName: 'potato_heart',
            description: 'Gives a big blue heart with potatoes in the middle (works on in Sudo_poweroff\'s commission server).',
        });
    }
    async run(msg) {
        return msg.channel.send("'           :blue_heart::blue_heart::blue_heart:                   :blue_heart::blue_heart::blue_heart:\n" +
            "      :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:       :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart:"+ dai +":blue_heart:"+ silverHeart +":blue_heart:"+ sudo +":blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            " :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "       :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:"+ der +":blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "             :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                   :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                         :blue_heart::blue_heart::blue_heart::blue_heart::blue_heart:\n" +
            "                               :blue_heart::blue_heart::blue_heart:\n" +
            "                                     :blue_heart:");
    }
};