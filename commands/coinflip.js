module.exports = {
	name: 'coinflip',
	description: 'flip a coin.',
	execute(message) {
		message.channel.send((Math.floor(Math.random() * 2) == 0) ? 'Heads' : 'Tails');
	},
};