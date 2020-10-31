module.exports = {
  name: 'blood',
  description: 'clone and delete channel',
  admin: true,
  execute(message, args) {
    if (args.join(" ").toLowerCase() !== "for the blood god!") {
      message.channel.clone();
      message.channel.delete();
    }
  },
};
