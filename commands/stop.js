module.exports = {
	name: 'stop',
	description: 'stop',
	admin: true,
	execute(message) {
        process.exit();
	},
};