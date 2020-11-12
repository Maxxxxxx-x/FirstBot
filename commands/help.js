const Discord = require("discord.js")

const exampleEmbed = {
	color: 0xFF0000,
	title: "Here are all the avaliable commands.",
	description: "The prefix is ``!``.",
	fields: [
		{
			name: "``ping``",
			value: "This is for you to check if the bot is up and running or not.",
		},
		{
			name: "``introduceme``",
			value: "This command is classed as a fun command. If you wish to have it work for you, you must DM one of the admin. \n Do note that administrators are not necessarily required to help you on that subject."
		},
		{
			name: "``howtoverify``",
			value: "This command is used for everyone to see how can they verify in the server, in case they don't know how to."
		},
		{
			name: "``verify``",
			value: "This command is used for you to obtain the 'verified' role if you meet all required conditions. Updates on any verification conditions will be published in the server-news channel."
		},
		{
			name: "``help``",
			value: "Well... you are using it right now, right?"
		},
		{
			name: "``kick``",
			value: "This command is used when you are kicking a member. \n ``THIS COMMAND IS RESTRICTED TO SERVER MODERATORS.``"
		},
		{
			name: "``ban (WIP)``",
			value: "This command is used when you are banning a member. \n ``THIS COMMAND IS RESTRICTED TO SERVER ADMINISTRATORS.``"
		},
		{
			name: "``update``",
			value: "This command is used by administrators to update a user's roles. Currently, it will only assign the targetted member with the verified role. \n ``THIS COMMAND IS RESTRICTED TO SERVER ADMINISTRATORS.``"
		},

	],
	footer: {
		text: "This bot is made by @MaxxCypress"
	},
};


module.exports = {
	name: "help",
	description: "this is the help command!",
	execute(message, args) {
		message.channel.send("I will DM you about that, please standby.")
		message.author.send({ embed: exampleEmbed });
	}
}