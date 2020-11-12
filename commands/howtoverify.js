const howtoverifyEmbed = {
	color: 0x56d916,
	title: "Hello, welcome to the server!",
	description: "In order to get full access to the serer, you are required to do the following command.",
	fields: [
		{
			name: "``!verify``",
			value: "This is for you to check if the bot is up and running or not. The verification system is implemented in order to make sure that most users are humans, not bots, as 'Server raids' are getting more common. \n\n A better verification system will be implemeted in the near future to ensure that our server is protected 100% and that all our members wouldn't come back to 1k pings from python bots. \n\n Thank you for your cooperation."
		},
	],
	footer: {
		text: "This bot is made by @MaxxCypress"
	},
};

module.exports = {
	name: "howtoverify",
	description: "this is one of the help command!",
	execute(message, args) {
		message.channel.send({ embed: howtoverifyEmbed }).catch(console.error);
	}
}