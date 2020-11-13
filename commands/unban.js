const Discord = require("discord.js")

module.exports = {
    name: "unban",
    description: "this is the unban command!",
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply("you dont have the permissions to use this command");
        const { member, mentions } = message;
        let target = mentions.users.first();
        const banReason = args.slice(1, 20).join(" ") || "N/A";
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            if (targetMember != message.author) {
                message.channel.send(`${targetMember} has been unbanned.`);
                targetMember.unban(targetMember);
            } else {
                message.reply(`you cannot unbanned yourself.`)
            }
        } else {
            message.reply(`Please specify someone to unbanned.`);
        }
    }
}