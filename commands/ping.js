module.exports = {
    name: "ping",
    description: "this is the ping command!",
    execute(message, args) {
        message.channel.send("Pong" + `\n I am now ${Date.now() - message.createdTimestamp}ms late.`);
    }
}
