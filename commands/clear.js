module.exports = {
  name: 'clear',
  description: 'clone and delete channel',
  admin: true,
  execute(message, args) {
    if (args[0] === 'yes!') {
      message.channel.clone();
      message.channel.delete();
    }
  },
};
