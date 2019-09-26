const Discord = require('discord.js');
const commando = require('discord.js-commando');
const clientDisc = new Discord.Client();
const config = require('./Soul.json');
const ytdl = require('ytdl-core-discord');
const ytdl2 = require('ytdl-core');
const snoowrap = require('snoowrap');
//const serverQueue = queue.get(msg.guild.id);
const {
    CommandoClient
} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: config.discord.prefix,
    owner: config.discord.owner
});
client.music = new Map();

function random(low, high) {
    return Math.random() * (high - low) + low
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async (msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const serverQueue = queue.get(msg.guild.id);
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "help") {
        return msg.channel.send(
            "```" +
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
            "```"
        );
    }
    if (command == "pun") {
        let sub = await reddit.getSubreddit('Puns').getRandomSubmission().then((res) => {
            return {
                title: res.title,
                url: res.url,
                body: res.body
            }
        });
        console.log(sub);
        msg.channel.send(sub.title + "\n" + sub.url);
        //const exampleEmbed = new Discord.RichEmbed()
        //.setTitle(sub.title)
        //.setImage(sub.url)
        //msg.send(exampleEmbed);
    }
    if (command == "heck") {
        return msg.reply("Heck you.")
    }
    if (command == "bitch") {
        return msg.reply("No u.")
    }
    if (command == "gay") {
        return msg.reply("No u.")
    }
    if (command == "eatass") {
        return msg.reply("Silence bottom.")
    }
    if (command == "fuck") {
        return msg.reply("This is a family friendly server, we use frick.")
    }
    if (command == "silver") {
        return msg.channel.send("He is a fabulous creator.")
    }
    if (command == "ping") {
        msg.reply("Pong!")
    }
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['music', 'Commands for playing music.'],
		['random', 'Random commands.'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
        help: true,
    })
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.discord.token);