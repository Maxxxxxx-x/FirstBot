const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "this is the ban command!",
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply('you dont have the permissions to use this command');
        const { member, mentions } = message;
        let target = mentions.users.first();
        const tag = message.member.id;
        const banReason = args.slice(1, 20).join(" ") || "N/A";
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            if (targetMember != message.author) {
                message.channel.send(`${targetMember} has been ban. \n Reason : ${banReason}`);
                targetMember.ban(targetMember, { banReason });
            } else {
                message.reply(`you cannot kick yourself.`);
            }
        } else {
            message.reply(`Please specify someone to ban.`);
        }
    }
}