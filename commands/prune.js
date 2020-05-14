module.exports = {
  name: 'prune',
  description: 'bulk delete messages',
  admin: true,
  execute(message, args) {
    let p = parseInt(args[0]) + 1;
    if (isNaN(p) || p <= 1) {
      return message.reply('that doesn\'t seem to be a valid number.');
    } else if (p > 99) { 
      let px = p - 99; if (px > 99) { let py = px - 99; if (py > 99) { let pz = py - 99; if (pz > 99) { let pz = 99; } message.channel.bulkDelete(99); message.channel.bulkDelete(px); message.channel.bulkDelete(py); message.channel.bulkDelete(pz); } message.channel.bulkDelete(99); message.channel.bulkDelete(px); message.channel.bulkDelete(py); } message.channel.bulkDelete(99); message.channel.bulkDelete(px);
    } else {
      message.channel.bulkDelete(p);
    }
  },
};
