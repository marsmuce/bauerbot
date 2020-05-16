module.exports = {
  name: 'ood',
  description: 'clone and delete channel',
  admin: true,
  execute(message, args) {
    if (args[0] === 'for' && args[1] === 'the' && args[2] === 'blood' && args[3] === 'god!') {
      message.channel.clone();
      message.channel.delete();
    }
  },
};
