const {Command} = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');
const ytdl2 = require('ytdl-core');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['play'],
            group: 'music',
            memberName: 'play',
            description: 'Plays the video from the give Youtube URL.',
            args: [
                {
                    key: 'url',
                    prompt: 'Insert a URL',
                    type: 'string',
                },
            ],
        });
    }

    async run(msg, { url }) {
        const serverQueue = msg.client.music.get(msg.guild.id);
        await this.execute(msg, serverQueue, url);
    }

    async execute(msg, serverQueue, url) {
        if (!msg.guild.voiceConnection) var connection = await msg.member.voiceChannel.join();

        const queue = msg.client.music;

        const voiceChannel = msg.member.voiceChannel;
        const songInfo = await ytdl2.getInfo(url);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        };

        if (!serverQueue) {
            const queueContruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: connection || msg.guild.voiceConnection,
                songs: [],
                volume: 5,
                playing: true,
                musicPlayer: null,
            };

            queue.set(msg.guild.id, queueContruct);
            queueContruct.songs.push(song);

            try {
                this.play(msg, queueContruct.songs[0]);
            } catch (err) {
                console.error(err);
                queue.delete(msg.guild.id);
                return msg.channel.send(err);
            }

        } else {
            if (!serverQueue.songs.lenght && !serverQueue.playing) {
                serverQueue.songs.push(song);
                this.play(msg, serverQueue.songs[0]);
                return msg.channel.send(`${song.title} has been added to the queue!`);
            } else {
                serverQueue.songs.push(song);
                return msg.channel.send(`${song.title} has been added to the queue!`);
            }
        }
    }

    async DelayLeave(client, guild, serverQueue) {
        if (!serverQueue.songs.lenght && !serverQueue.playing) {
            serverQueue.voiceChannel.leave();
            client.music.delete(guild.id);
        }
    }

    async play(msg, song) {
        let serverQueue = msg.client.music.get(msg.guild.id);

        if (!song) {
            setTimeout(() => {
                this.DelayLeave(msg.client, msg.guild, serverQueue)
            }, 60000);
            return;
        }

        serverQueue.playing = true;
        serverQueue.musicPlayer = serverQueue.connection.playStream(
            ytdl2(song.url, { filter : 'audioonly', highWaterMark: 1<<25 }), 
            { volume: 1 }
        ).on('end', (reason) => {
            serverQueue = msg.client.music.get(msg.guild.id);
            serverQueue.playing = false;
            serverQueue.songs.shift();
            console.log('Music ended!', reason);
            this.play(msg, serverQueue.songs[0]);
        })
        .on('error', (err) => {
            console.log("err", err)
        })
        .on('debug ', (debug) => {
            console.log("debug ", debug)
        })

        //serverQueue.musicPlayer.setVolumeLogarithmic(serverQueue.volume / 5);
    }
};