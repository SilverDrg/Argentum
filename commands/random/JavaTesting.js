const {
    Command
} = require('discord.js-commando');

sum = (a, b) => {
    sum1 = (a) => a + 1;
    return sum1(a) + b;
}
module.exports = class HeartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'jstest',
            aliases: ['test', 'testjs'],
            group: 'random',
            memberName: 'jstest',
            description: 'Testing out random JavaScript commands/codes.',
        });
    }
    async run(msg) {
        return msg.channel.send(sum(10, 20));
    }
};