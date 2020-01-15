module.exports = {
	name: 'oh my god',
	execute(message) {
		message.channel.send({files: [`./img/omg.gif`]});
	},
};