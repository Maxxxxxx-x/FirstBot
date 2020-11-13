const { prefix, version, botName } = require("../config.json");
const botInfoEmbed = {
	color: 0xFF0000,
	title: "Here are my information.",
	fields: [
		{
			name: "Prefix:",
			value: `${prefix}`
		},
		{
			name: "Bot version (Current):",
			value: `${version}`,
		},
		{
			name: "Bot name:",
			value: `${botName}`
        },
	],
	footer: {
		text: "This bot is made by @MaxxCypress"
	},
};

module.exports = {
    name: "botinfo",
    description: "this is the botinfo command!",
	execute(message, args) {
		message.channel.send({ embed: botInfoEmbed })
    }
}
