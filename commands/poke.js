module.exports = {
	name: 'poke',
	description: 'poke someone',
	execute(message, args) {
        let taggedUser = message.mentions.users.first();
        let author = message.guild.members.get(message.author.id).displayName.toString();

        if(typeof args[0] != 'undefined' && args[0] != null && (args[0]<=1024 || message.author.id === '296712085532966915')) {
            if(message.author.id === '296712085532966915'){
		    message.channel.send(`Fuck off, Choppa`);
	    }
	    else {
		for (var i = 0; i < args[0]; i++) { 
                	message.channel.send(`\`@${author}\` poked ${taggedUser} with a stick. (${i+1}/${args[0]}) Imagine it like a jar of marbles. Each one of them- with different sizes, shapes, makeups- all have some very simple things in common, correct? They all border each other, they are all affected by the same gravitational pull and laws of physics, et cetera. Now, consider the idea that every single one of those marbles is representative of a universe. Not necessarily ours, but a universe. Now imagine that, instead of being contained to a measly jar, the space of marbles is an infinite sea. So, an infinite space of universes. And, given it’s infinite size, there must be an infinite number of universes that are equivalent to our own, correct? This is not Aetherspace. This is reality. The space between the marbles is a void in which there is nothing. Aetherspace is- essentially- that entire construct with the walls of each universe torn down. It is also exponentially smaller and representative of our space, allowing for teleportation and whatnot, but this is insignificant in the grand scheme of things. It is, in simplicity, that we can reach out to other universes. That everything exists. Things far greater than our own, ripe for the taking. I’m not suggesting piracy- I pay people to do that for me- but imagine if we found something great enough out there that could make us masters of our own reality. Or what if we found another universe in which we could be it’s masters? But I do not wish for the latter. I am not a coward; I will not abandon this world to find my utopia. I shall make it myself.`);
            	} 
	    }
        } else {
            message.channel.send('**Invalid Argument: **`' + args + '`\nPlease use a number ranging from `1` to `' + 1024 + `\` ` + 'folled by a user.');
        }
	},
};
