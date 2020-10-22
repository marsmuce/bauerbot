module.exports = {
	name: 'n',
	description: 'Yeah, I\'ve got time.',
	execute(message, args) {
		var rand_num = 0;
		message.channel.send(args[0]);
		if(typeof args[0] != 'undefined' && args[0] != null && args[0] >= 0 && args[0] <= 21) rand_num = args[0];
		message.channel.send("Rand num is " + rand_num);
		else if(typeof args[0] == 'undefined' || args[0] == null || args[0] < 0 || args[0] > 21) rand_num = Math.floor(Math.random() * 21);
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
			case 12:
				message.channel.send('https://cdn.discordapp.com/attachments/549767292209070081/763880618324000878/retard.png');
				break;
			case 13:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/768628101059182653/ogod.PNG');
				break;
			case 14:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/768296752838737960/unknown-38.png');
				break;
			case 15:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/768294370121744384/8212.jpg');
				break;
			case 16:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/768244825933086751/20201020_184959.jpg');
				break;
			case 17:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/768206495233867776/unknown.png');
				break;
			case 18:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/767889887726534666/20201019_192008.jpg');
				break;
			case 19:
				message.channel.send('https://cdn.discordapp.com/attachments/379067857893589004/766732780666749018/tumblr_o19jt756l41uwohkdo5_500.gif');
				break;
			case 20:
				message.channel.send('https://cdn.discordapp.com/attachments/387019454275649546/763961971086458930/unknown.png');
				break;
			case 21:
				message.channel.send('https://cdn.discordapp.com/attachments/403269780682833920/761018638852685834/unknown.png');
				break;
		}
	},
};
