var discord = require('discord.js');
var c = new discord.Client();

const cf = require('./config.json');

const devID = cf.devid;

var bt = process.env.TOKEN;

function log(l)
{
    console.log(l);
}

function checkBot(msg)
{
    if (msg.author.bot)
    {
        return true;
    }
    else
    {
        return false;
    }
}

c.on('ready', () => {
    log(`Logged in a ${c.user.tag}`)
    c.user.setActivity(`${c.guilds.size} Guilds | g!help`, { type: 'WATCHING'});
});

c.on('guildCreate', g => {
    c.user.setActivity(`${c.guilds.size} Guilds | g!help`, { type: 'WATCHING'});
});

c.on('guildDelete', g => {
    c.user.setActivity(`${c.guilds.size} Guilds | g!help`, { type: 'WATCHING'});
});

c.on('message', async m => {
    if (m.content.indexOf(cf.prefix) !== 0) return;

    const args = m.content.slice(cf.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "gay")
    {
        m.reply('No u');
    }

    if (cmd === "exit")
    {
        if (m.author.id === devID)
        {
            c.destroy();
            process.exit(0);
        }
    }
});

c.login(bt);