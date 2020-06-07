const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');

function checkWinner(connect4Array, row, column, circle) {
    console.log(`row:  ${row}, column: ${column}, circle: ${circle}`);
    if(row < 2){
        if(connect4Array[row][column] == circle && connect4Array[row+1][column] == circle && connect4Array[row+2][column] == circle && connect4Array[row+3][column] == circle)
            return true;
    }
    if(row > 2) {
        if(connect4Array[row][column] == circle && connect4Array[row-1][column] == circle && connect4Array[row-2][column] == circle && connect4Array[row-3][column] == circle)
            return true;
    }
    if(row < 3) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column] == circle && connect4Array[row+2][column] == circle && connect4Array[row-1][column] == circle)
            return true;
    }
    if(row > 1 && row < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column] == circle && connect4Array[row-1][column] == circle && connect4Array[row-2][column] == circle)
            return true;
    }
    if(row < 2 && column < 2) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column+1] == circle && connect4Array[row+2][column+2] == circle && connect4Array[row+3][column+3] == circle)
            return true;
    }
    if(row < 2 && column > 2 && column < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column-1] == circle && connect4Array[row+2][column-2] == circle && connect4Array[row+3][column-3] == circle)
            return true;
    }
    if(row > 1 && row < 4 && column < 1) {
        if(connect4Array[row][column] == circle && connect4Array[row-1][column+1] == circle && connect4Array[row-2][column+2] == circle && connect4Array[row+3][column+3] == circle)
            return true;
    }
    if(row > 2 && row < 4 && column > 1 && column < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row-1][column-1] == circle && connect4Array[row-2][column-2] == circle && connect4Array[row-3][column-3] == circle)
            return true;
    }
    if(row < 3 && column < 1) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column+1] == circle && connect4Array[row+2][column+2] == circle && connect4Array[row-1][column-1] == circle)
            return true;
    }
    if(row < 3 && column > 1 && column < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column-1] == circle && connect4Array[row+2][column-2] == circle && connect4Array[row-1][column+1] == circle)
            return true;
    }
    if(row > 1 && row < 4 && column > 0 && column < 3) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column-1] == circle && connect4Array[row-1][column+1] == circle && connect4Array[row-2][column+2] == circle)
            return true;
    }
    if(row > 1 && row < 4 && column > 1 && column < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row+1][column+1] == circle && connect4Array[row-1][column-1] == circle && connect4Array[row-2][column-2] == circle)
            return true;
    }
    if(column < 2) {
        if(connect4Array[row][column] == circle && connect4Array[row][column+1] == circle && connect4Array[row][column+2] == circle && connect4Array[row][column+3] == circle)
            return true;
    }
    if(column > 3) {
        if(connect4Array[row][column] == circle && connect4Array[row][column-1] == circle && connect4Array[row][column-2] == circle && connect4Array[row][column-3] == circle)
            return true;
    }
    if(column > 0 && column < 3) {
        if(connect4Array[row][column] == circle && connect4Array[row][column+1] == circle && connect4Array[row][column+2] == circle && connect4Array[row][column-1] == circle)
            return true;
    }
    if(column > 1 && column < 4) {
        if(connect4Array[row][column] == circle && connect4Array[row][column+1] == circle && connect4Array[row][column-1] == circle && connect4Array[row][column-2] == circle)
            return true;
    }
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
                falseMove = false
            }
        }
        //msg.channel.send('Tick-tack-toe is a work in progress.');
    }

};