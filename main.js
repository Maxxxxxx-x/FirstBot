const Discord = require('discord.js');
const fs = require('fs');
const { prefix, version, botName } = require('./config.json');


const onlineEmbed = {
	"color": 0x56d916,
	"title": "Bot is offline",
	"description": "The bot is currently offline.",
	"footer": {
		"text": "This bot is made by @MaxxCypress"
	}
}

const offlineEmbed = {
	"color": 0xFF0000,
	"title": "Bot is offline",
	"description": "The bot is currently offline.",
	"footer": {
		"text": "This bot is made by @MaxxCypress"
	}
}

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Logged in as ${botName}. \nVersion: ${version} `);
	client.channels.get("776434487415930930").send({ embed: onlineEmbed });
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.token);
