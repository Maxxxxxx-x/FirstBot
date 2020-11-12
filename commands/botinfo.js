const botInfoEmbed = {
	color: 0xFF0000,
	title: "Here are my information.",
	description: "The prefix is ``!``.",
	fields: [
		{
			name: "Bot version (Current):",
			value: `0.12	`,
		},
		{
			name: "Bot name:",
			value: `MaxxCypress`
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
