import {
  Discord,
  fs
} from './imports.mjs'
const client = new Discord.Client();

const prefix = 'b!';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
commandFiles.forEach(file => {
    require(`./commands/${file}`).then(command => {
	client.commands.set(command.name, command);
    })
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

  	 const args = message.content.slice(prefix.length).split(/ +/),
	 commandName = args.shift().toLowerCase(),
	 command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	
	if(message.guild !== null) { 
		const admin = message.member.hasPermission("ADMINISTRATOR");
		if (command.admin && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Permissions required to execute this command');
	}

	if (command.guildOnly && message.channel.type !== 'text') return message.reply('I can\'t execute that command inside DMs!');

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply({embed: {
			setTitle: 'Error',
			setDescription: "```js\n" + JSON.stringify(error) + "```"
		}});
	}
});

client.on('message', message => {
    client.responses = new Discord.Collection();
	const responseFiles = fs.readdirSync('./responses').filter(file => file.endsWith('.js'));
	responseFiles.forEach(file => {
            const response = require(`./responses/${file}`);
	    client.responses.set(response.name, response);
	})
	const responseName = message.content.toLowerCase();
	const response = client.responses.get(responseName) || client.responses.find(re => re.aliases && re.aliases.includes(responseName));

	return reponse ? response.execute(message) : null;

});

client.on('message', message => {
	const echo = require('./responses/echo.json');
	if (!echo) return;
        if (echo.some(word => message.content.toLowerCase() == word) && !message.author.bot) return  message.channel.send(message.content);
});

client.login(process.env.TOKEN);
