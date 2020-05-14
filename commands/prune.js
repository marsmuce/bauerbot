module.exports = {
  name: 'prune',
  description: 'bulk delete messages',
  admin: true,
  execute(message, args) {
    let p = parseInt(args[0]) + 1;
    if (isNaN(p) || p <= 1) {
      return message.reply('that doesn\'t seem to be a valid number.');
    } else if (p > 99) {
      let px = p - 99;
      message.channel.bulkDelete(99, true);
      message.channel.bulkDelete(px, true);
    } else {
      message.channel.bulkDelete(p, true);
    }
  },
};
