const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "this is the kick command!",
    execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBER") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply(" you don't have the permissions to use this command!");
        const { member, mentions } = message;
        let target = mentions.users.first();
        const kickreason = args.slice(1).join(" ") || "N/A";
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            if (targetMember != message.author) {
                message.channel.send(`${targetMember} has been kicked. \n Reason : ${kickreason}`);
                targetMember.kick(targetMember, { kickreason });
            } else {
                message.reply(`you cannot kick yourself.`)
            }
        } else {
            message.reply(`please specify someone to kick.`);
        }
    }
}