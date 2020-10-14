const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function checkWinner(ticktacktoeArray) {
    if(ticktacktoeArray[0][0] == ':regional_indicator_x:' && ticktacktoeArray[0][1] == ':regional_indicator_x:' && ticktacktoeArray[0][2] == ':regional_indicator_x:')
        return true;
    else if(ticktacktoeArray[1][0] == ':regional_indicator_x:' && ticktacktoeArray[1][1] == ':regional_indicator_x:' && ticktacktoeArray[1][2] == ':regional_indicator_x:')
        return true;
    else if(ticktacktoeArray[2][0] == ':regional_indicator_x:' && ticktacktoeArray[2][1] == ':regional_indicator_x:' && ticktacktoeArray[2][2] == ':regional_indicator_x:')
        return true;
    else if(ticktacktoeArray[0][0] == ':regional_indicator_x:' && ticktacktoeArray[1][1] == ':regional_indicator_x:' && ticktacktoeArray[2][2] == ':regional_indicator_x:')
        return true;
    else if(ticktacktoeArray[0][2] == ':regional_indicator_x:' && ticktacktoeArray[1][1] == ':regional_indicator_x:' && ticktacktoeArray[2][0] == ':regional_indicator_x:')
        return true;
    else if(ticktacktoeArray[0][0] == ':regional_indicator_o:' && ticktacktoeArray[0][1] == ':regional_indicator_o:' && ticktacktoeArray[0][2] == ':regional_indicator_o:')
        return true;
    else if(ticktacktoeArray[1][0] == ':regional_indicator_o:' && ticktacktoeArray[1][1] == ':regional_indicator_o:' && ticktacktoeArray[1][2] == ':regional_indicator_o:')
        return true;
    else if(ticktacktoeArray[2][0] == ':regional_indicator_o:' && ticktacktoeArray[2][1] == ':regional_indicator_o:' && ticktacktoeArray[2][2] == ':regional_indicator_o:')
        return true;
    else if(ticktacktoeArray[0][0] == ':regional_indicator_o:' && ticktacktoeArray[1][1] == ':regional_indicator_o:' && ticktacktoeArray[2][2] == ':regional_indicator_o:')
        return true;
    else if(ticktacktoeArray[0][2] == ':regional_indicator_o:' && ticktacktoeArray[1][1] == ':regional_indicator_o:' && ticktacktoeArray[2][0] == ':regional_indicator_o:')
        return true;
    else 
        return false;
}

function getKeyByValue(object, value) {
    for (let [k, v] of object) {
        if (v == value) { 
          return true; 
        }
      }  
      return false;
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ticktacktoe',
            aliases: ['row3'],
            group: 'games',
            memberName: 'ticktacktoe',
            description: 'Classic game of tick-tack-toe',
        });
    }
    async run(msg) {
        var stop = false;
        var player = 1;
        let ticktacktoeArray = [[':blue_square:',':blue_square:',':blue_square:'],
                                [':blue_square:',':blue_square:',':blue_square:'],
                                [':blue_square:',':blue_square:',':blue_square:']];
        msg.channel.send(ticktacktoeArray[0][0] + ticktacktoeArray[0][1] + ticktacktoeArray[0][2] + '\n'+
                        ticktacktoeArray[1][0] + ticktacktoeArray[1][1] + ticktacktoeArray[1][2] + '\n' +
                        ticktacktoeArray[2][0] + ticktacktoeArray[2][1] + ticktacktoeArray[2][2]);
        while(!stop) {
            await msg.channel.send("Chose area");
            const chosenArea = await msg.channel.awaitMessages(mesg => mesg.content, {max:1, time: 60000, error: ['Time']});
            console.log(`area value:  ${chosenArea.values().next().value}`);
            if(getKeyByValue(chosenArea, 'stop')) 
                stop = true;
            
            if(stop) {
                msg.channel.send("Game has been stopped.");
                break;
            }

            const str = chosenArea.values().next().value.toString();
            const args = str.split('');
            if(!isNaN(args[0])) {
                if(player % 2 == 0) {
                    if(args[1] == 'A') {
                        ticktacktoeArray[args[0]-1][0] = ':regional_indicator_x:';
                    } else if (args[1] == 'B') {
                        ticktacktoeArray[args[0]-1][1] = ':regional_indicator_x:';
                    } else if(args[1] == 'C') {
                        ticktacktoeArray[args[0]-1][2] = ':regional_indicator_x:';
                    }
                } else {
                    if(args[1] == 'A') {
                        ticktacktoeArray[args[0]-1][0] = ':regional_indicator_o:';
                    } else if (args[1] == 'B') {
                        ticktacktoeArray[args[0]-1][1] = ':regional_indicator_o:';
                    } else if(args[1] == 'C') {
                        ticktacktoeArray[args[0]-1][2] = ':regional_indicator_o:';
                    }
                }
            }

            stop = checkWinner(ticktacktoeArray);
            msg.channel.send(ticktacktoeArray[0][0] + ticktacktoeArray[0][1] + ticktacktoeArray[0][2] + '\n'+
                        ticktacktoeArray[1][0] + ticktacktoeArray[1][1] + ticktacktoeArray[1][2] + '\n' +
                        ticktacktoeArray[2][0] + ticktacktoeArray[2][1] + ticktacktoeArray[2][2]);

            if(checkWinner(ticktacktoeArray)) {
                if(Math.floor(player/2) == 0) {
                    msg.channel.send("Winner is player2");
                } else {
                    msg.channel.send("Winner is player1");
                }
            }
            player++; 
        }
        //msg.channel.send('Tick-tack-toe is a work in progress.');
    }

};