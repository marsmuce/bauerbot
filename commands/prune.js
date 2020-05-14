module.exports = {
	name: 'prune',
	description: 'bulk delete messages',
	admin: true,
	execute(message, args) {
		let p = parseInt(args[0]) + 1;

		if (isNaN(p)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (p <= 1 || p > 10000) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(p, true).catch(err => {
		console.error(err); message.channel.send(err);});
	},
};
