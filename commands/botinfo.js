const { prefix, version, botName } = require("./config.json");

const botInfoEmbed = {
	color: 0xFF0000,
	title: "Here are my information.",
	description: `The prefix is ${prefix}.`,
	fields: [
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
        
    }
}
