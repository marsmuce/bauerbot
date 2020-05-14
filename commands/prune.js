module.exports = {
	name: 'prune',
	description: 'bulk delete messages',
	admin: true,
	execute(message, args) {
		let p = parseInt(args[0]) + 1;
		let dupe = parseInt(args[1]);

		if (isNaN(p)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (p <= 1 || p > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}
		if (isNan(dupe)) {
			if (isNaN(p)) {
				return message.reply('that doesn\'t seem to be a valid number.');
			} else if (p <= 1 || p > 100) {
				return message.reply('you need to input a number between 1 and 99.');
			}
			message.channel.bulkDelete(p, true).catch(err => {
			console.error(err); message.channel.send(err);});
		} else if (dupe > 1) {
			while (dupe > 0) {
				message.channel.bulkDelete(p, true).catch(err => {
				console.error(err); message.channel.send(err);});
				dupe = dupe - 1;
			}
		}
	},
};
