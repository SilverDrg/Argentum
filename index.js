const Discord = require('discord.js');
const commando = require('discord.js-commando');
const clientDisc = new Discord.Client();
const config = require('./Soul.json');
const ytdl = require('ytdl-core-discord');
const ytdl2 = require('ytdl-core');
const snoowrap = require('snoowrap');
const {
    CommandoClient
} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: config.discord.prefix,
    owner: config.discord.owner
});
client.music = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async (msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
        return msg.reply("Demonetized.")
    }
    if (command == "silver") {
        return msg.channel.send("Better than gold.")
    }
    if (command == "ping") {
        msg.reply("Pong!")
    }
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['games', 'Commands for playing simple games'],
		['music', 'Commands for playing music.'],
        ['random', 'Random commands.'],
        ['weather', 'Commands for weather forecasts'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
        help: false,
    })
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.discord.token);