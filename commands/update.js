module.exports = {
    name: "update",
    description: "this is the update command!",
    execute(message, args) {
        let verified = message.guild.roles.cache.find(r => r.name === "verified");
        let veri = message.guild.roles.cache.find(r => r.name === "VERIFIED");
        const { member, mentions } = message;
        let target = mentions.users.first();
        const tag = message.member.id;
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            if (targetMember != message.author) {
                if (targetMember.user.id == "478622093538230274") { //for eugine only
                    targetMember.roles.add("775719221551300609");
                    message.channel.send(`${targetMember} has been updated.`).catch(console.error);
                }
                else {
                    targetMember.roles.add(verified).catch(console.error); //for everyone else
                    message.channel.send(`${targetMember} has been updated.`).catch(console.error);
                }
            }
        } else {
            message.channel.send(`<@${tag}> Please specify someone to update.`);
        }
    }
}
