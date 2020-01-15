module.exports = {
	name: 'nice',
	execute(message) {
		message.channel.send({files: [`./img/nice.gif`]});
	},
};