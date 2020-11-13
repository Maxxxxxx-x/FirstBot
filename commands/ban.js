const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "this is the ban command!",
    execute(message, args) {
        if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply('you dont have the permissions to use this command');
        let bannedMember = await Discord.Client.fetchUser(args[0])
        if (!bannedMember) return message.channel.send("Please provide the User id to unban someone.")

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reasons given."

        try {
            message.guild.unban(bannedMember, { reason: reason })
            message.channel.send(`${bannedMember.tag} has been unbanned.`)
        } catch (e) {
            console.log(e.message)
        }
}