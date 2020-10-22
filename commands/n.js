module.exports = {
	name: 'n',
	description: 'Yeah, I\'ve got time.',
	execute(message, args) {
		int rand_num = Math.floor(Math.random() * 12);
		switch(rand_num) {
			case 0:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/767568589997211658/1018201903_HDR.jpg');
				break;
			case 1:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/767831475096780800/unknown.png');
				break;
			case 2:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/767212855274766336/1010201739_HDR.jpg');
				break;
			case 3:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/766110588459810857/unknown.png');
				break;
			case 4:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/766738202178093086/unknown.png');
				break;
			case 5:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/766713917816045618/unknown.png');
				break;
			case 6:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/761034243722969088/Chryssalid_on_the_Titanic.png');
				break;
			case 7:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/750192115174080542/unknown.png');
				break;
			case 8:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/750189201311399936/unknown.png');
				break;
			case 9:
				message.channel.send('https://cdn.discordapp.com/attachments/719641860015915008/749845088590364772/unknown.png');
				break;
			case 10:
				message.channel.send('https://cdn.discordapp.com/attachments/549767292209070081/758512706503966750/The_Suffering_has_only_just_begun.png');
				break;
			case 11:
				message.channel.send('https://cdn.discordapp.com/attachments/387019454275649546/759507648860389406/The_Good_the_Bad_and_the_Aliens_continue_to.png');
				break;
		}
	},
};
