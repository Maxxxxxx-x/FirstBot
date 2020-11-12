module.exports = {
    name: "introduceme",
    description: "this introduces me!",
    execute(message, args) {
        if (message.member.user.id == "413689179940323328") {
            message.channel.send("<@413689179940323328> is the creator of this bot.");
        } else if (message.member.user.id == "483637092329717770") {
            message.channel.send("<@483637092329717770> is our supreme overlord");
        } else if (message.member.user.id == "457225790715723778") {
            message.channel.send("FuQing sucks");
        } else if (message.member.user.id == "407564312563941376") {
            message.channel.send("I am Marcus, I am Sohai");
        }
    }
}