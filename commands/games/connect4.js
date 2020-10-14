const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != ':white_circle:') && (a ==b) && (a == c) && (a == d));
}

function checkWinner(bd) {
    // Check down
    for (r = 0; r < 2; r++)
        for (c = 0; c < 7; c++)
            if (checkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return true;

    // Check right
    for (r = 0; r < 5; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return true;

    // Check down-right
    for (r = 0; r < 2; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return true;

    // Check down-left
    for (r = 3; r < 5; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return true;

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
            name: 'connect4',
            aliases: ['row4', '4inrow'],
            group: 'games',
            memberName: 'connect4',
            description: 'Classic game of connect-4',
        });
    }
    async run(msg) {
        var stop = false;
        var falseMove = false;
        var player = 1;
        let connect4Array = [[':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:'],
                                [':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:'],
                                [':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:'],
                                [':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:'],
                                [':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:',':white_circle:']];
        let rowCount = [4, 4, 4, 4, 4, 4, 4];

        msg.channel.send(connect4Array[0][0] + connect4Array[0][1] + connect4Array[0][2] + connect4Array[0][3] + connect4Array[0][4] + connect4Array[0][5] + connect4Array[0][6] + '\n' +
                        connect4Array[1][0] + connect4Array[1][1] + connect4Array[1][2] + connect4Array[1][3] + connect4Array[1][4] + connect4Array[1][5] + connect4Array[1][6] + '\n' +
                        connect4Array[2][0] + connect4Array[2][1] + connect4Array[2][2] + connect4Array[2][3] + connect4Array[2][4] + connect4Array[2][5] + connect4Array[2][6] + '\n' +
                        connect4Array[3][0] + connect4Array[3][1] + connect4Array[3][2] + connect4Array[3][3] + connect4Array[3][4] + connect4Array[3][5] + connect4Array[3][6] + '\n' +
                        connect4Array[4][0] + connect4Array[4][1] + connect4Array[4][2] + connect4Array[4][3] + connect4Array[4][4] + connect4Array[4][5] + connect4Array[4][6]);
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

            if(!isNaN(args[0]))  {
                if(player % 2 == 0) {
                    console.log(`area value:  ${rowCount[args[0]-1]}`);
                    if(rowCount[args[0]-1] >= 0) {
                        connect4Array[rowCount[args[0]-1]][args[0]-1] = ':blue_circle:';
                        rowCount[args[0]-1] -= 1;
                        console.log(`row2: ${rowCount[args[0]-1]}`);
                    } else {
                        msg.channel.send("This column is full.");
                        falseMove = true;
                    }
                } else {
                    console.log(`area value:  ${rowCount[args[0]-1]}`);
                    if(rowCount[args[0]-1] >= 0) {
                        connect4Array[rowCount[args[0]-1]][args[0]-1] = ':red_circle:';
                        rowCount[args[0]-1] -= 1;
                        console.log(`row: ${rowCount[args[0]-1]}`);
                    } else {
                        msg.channel.send("This column is full.");
                        falseMove = true;
                    }
                }
            }
            
            msg.channel.send(connect4Array[0][0] + connect4Array[0][1] + connect4Array[0][2] + connect4Array[0][3] + connect4Array[0][4] + connect4Array[0][5] + connect4Array[0][6] + '\n' +
                        connect4Array[1][0] + connect4Array[1][1] + connect4Array[1][2] + connect4Array[1][3] + connect4Array[1][4] + connect4Array[1][5] + connect4Array[1][6] + '\n' +
                        connect4Array[2][0] + connect4Array[2][1] + connect4Array[2][2] + connect4Array[2][3] + connect4Array[2][4] + connect4Array[2][5] + connect4Array[2][6] + '\n' +
                        connect4Array[3][0] + connect4Array[3][1] + connect4Array[3][2] + connect4Array[3][3] + connect4Array[3][4] + connect4Array[3][5] + connect4Array[3][6] + '\n' +
                        connect4Array[4][0] + connect4Array[4][1] + connect4Array[4][2] + connect4Array[4][3] + connect4Array[4][4] + connect4Array[4][5] + connect4Array[4][6]);
            
            if(!falseMove) {
                if(player % 2 == 0) {
                    console.log(`player: ${player%2}`);
                    if(checkWinner(connect4Array, rowCount[args[0]-1], args[0]-1, ':blue_circle:')) {
                        stop = true;
                        msg.channel.send("Winner is player2");
                    }
                } else {
                    console.log(`player: ${player%2}`);
                    if(checkWinner(connect4Array, rowCount[args[0]-1], args[0]-1, ':red_circle:')) {
                        stop = true;
                        msg.channel.send("Winner is player1");
                    }
                }
            }

            if(!falseMove) {
                player++; 
            }
            falseMove = false
        }
        //msg.channel.send('Tick-tack-toe is a work in progress.');
    }

};