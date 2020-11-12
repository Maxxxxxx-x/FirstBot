const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "this is the kick command!",
    execute(message, args) {
        const { member, mentions } = message;
        let target = mentions.users.first();
        const tag = message.member.id;
        const kickreason = args.slice(1).join(" ") || "N/A";
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            if (targetMember != message.author) {
                message.channel.send(`${targetMember} has been kicked. \n Reason : ${kickreason}`);
                targetMember.kick(targetMember, { kickreason });
            } else {
                message.channel.send(`<@${tag}>, you cannot kick yourself.`)
            }
        } else {
            message.channel.send(`<@${tag}> Please specify someone to kick.`);
        }
    }
}