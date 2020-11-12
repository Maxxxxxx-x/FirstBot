module.exports = {
    name: "verify",
    description: "verifies user",
    execute(message, args) {
        let verified = message.guild.roles.cache.find(r => r.name === "verified");
        let veri = message.guild.roles.cache.find(r => r.name === "VERIFIED");

        if (message.member.roles.cache.some(r => r.name === "verified")) {
            message.channel.send("You ARE verified");
        }
        else {
            if (message.member.user.id == "478622093538230274") { //for eugine only
                message.member.roles.add("775719221551300609");
                message.channel.send("You have been verified!").catch(console.error);
            }
            else {
                message.member.roles.add(verified).catch(console.error); //for everyone else
                message.channel.send("You have been verified!").catch(console.error);
            }
        }
    }
}