const {Command} = require('discord.js-commando');
const snoowrap = require('snoowrap');
const config = require('../../Soul.json');
const reddit = new snoowrap({
    userAgent: config.reddit.userAgent,
    clientId: config.reddit.clientId,
    clientSecret: config.reddit.clientSecret,
    username: config.reddit.username,
    password: config.reddit.password
});

function random(low, high) {
    return Math.random() * (high - low) + low
}

module.exports = class OwOCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'owo',
            aliases: ['uwu'],
            group: 'random',
            memberName: 'owo',
            description: 'Use at your own risk.',
        });
    }
    async run(msg) {
        const rnd = random(1, 101);
        if (rnd <= 15) {
            msg.reply("What's this? OwO");
        } else if (rnd > 15 && rnd <= 30) {
            msg.reply("Please no.");
        } else if (rnd > 30 && rnd <= 45) {
            msg.reply("you committed the ultimate cardinal sin, you got personal. You, as a team of professionals trying to make money, got personal. You got personal and decided to insult your playbase, calling us 'ass-hats' and 'freeloaders'. Not a wise move.\n\n" +
                "We won't forget this. You`ve set a new tone for the kind of interaction we'll be having with you. It's a cold one. One where there aren't any illusions about the reality of the situation. Previous notions of 'family' are dead. We are mere consumers to you, and that is obvious.\n\n" +
                "You have chosen to bring in a new era of hostility and bitterness. Well done. Great PR move.");
        } else if (rnd > 45 && rnd <= 60) {
            msg.reply("Please stick to the restraining order.");
        } else if (rnd > 60 && rnd <= 75) {
            msg.reply("Rawr x3 *nuzzles* uwu how are you *pounces on you* you're so warm o3o *notices you have a bulge* o: someone's happy ;) *nuzzles your necky wecky~* murr~ hehehe *rubbies your bulgy wolgy* you're so big :oooo *rubbies more on your bulgy wolgy* it doesn't stop growing ·///· *kisses you and lickies your necky* daddy likies (; *nuzzles wuzzles* I hope daddy really likes $: *wiggles butt and squirms* I want to see your big daddy meat~ *wiggles butt* I have a little itch o3o *wags tail* can you please get my itch~ *puts paws on your chest* nyea~ its a seven inch itch *rubs your chest* can you help me pwease *squirms* pwetty pwease *sad face* I need to be punished *runs paws down your chest and bites lip* like I need to be punished really good~ *paws on your bulge as I lick my lips* I'm getting thirsty. I can go for some milk *unbuttons your pants as my eyes glow* you smell so musky :v *licks shaft* mmmm~ so musky *drools all over your cock* your daddy meat I like *fondles* Mr. Fuzzy Balls hehe *puts snout on balls and inhales deeply* oh god im so hard~ *licks balls* punish me daddy~ nyea~ *squirms more and wiggles butt* I love your musky goodness *bites lip* please punish me *licks lips* nyea~ *suckles on your tip* so good *licks pre of your cock* salty goodness~ *eyes role back and goes balls deep* mmmm~ *moans and suckles* o3o!!!");
        } else if (rnd > 75 && rnd <= 100) {
            let sub = await reddit.getSubreddit('OwO').getRandomSubmission({time: 'all', limit: 1}).then((res) => {
                return {
                    title: res.title,
                    url: res.url,
                    body: res.body
                }
            });
            msg.reply(sub.title + "\n" + sub.url);
        }

    }
};