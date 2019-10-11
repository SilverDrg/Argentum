const config = require('../../Soul.json');
const {Command} = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');
const OWKey = config.OpenWeather.OWkey;
var data = '';

module.exports = class HeartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'weather',
            aliases: ['weather', 'forecast'],
            group: 'weather',
            memberName: 'weather',
            description: 'Gives you the weather forecast for the given city.',
            throttling: {
                usages: 1,
                duration: 60
            },
        });
    }

    async run(msg, city){
        request('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=' + OWKey, { json: true}, (err, res, body) => {
            if(err){
                return console.log(err)
            }
            else{
                if(data.weather == null){
                    let { main, description } = body.weather[0];
                    let { temp, humidity } = body.main;
                    const WSpeed = body.wind.speed * 3.6;
                    const WeatherEmbed = {
                        color: 0x0099ff,
                        title: 'Weather forecast',
                        url: '',
                        author: {
                            name: 'Argentum',
                            icon_url: '',
                            url: '',
                        },
                        description: 'Weather forecast for given city',
                        thumbnail: {
                            url: 'https://drive.google.com/uc?export=view&id=1e_-UH08vuK07EcqIWFVGv_OUapBtfEwx',
                        },
                        fields: [
                            {
                                name: 'City: ' + body.name,
                                value: 'ID: ' + body.id,
                            },
                            {
                                name: '\u200b',
                                value: '\u200b',
                            },
                            {
                                name: 'Weather group: ' + main,
                                value: 'Weather description: ' + description,
                                inline: true,
                            },
                            {
                                name: 'Temperature(°C): ' + temp,
                                value: 'Humidity(%): ' + humidity,
                                inline: true,
                            },
                            {
                                name: 'Wind speed(km/h): ' + WSpeed,
                                value: 'Visibility(m): ' + body.visibility,
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
                    msg.channel.send({ embed: WeatherEmbed});
                }
                else{
                    msg.channel.send("Enter a valid city.");
                }
            }
        });
    }
};