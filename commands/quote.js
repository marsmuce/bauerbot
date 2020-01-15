module.exports = {
	name: 'quote',
	description: 'quote',
	execute(message, args) {

        const quotes = require('../quotes.js');

        if(quotes.section[args[0]] && quotes.section[args[0]].quotes[args[1]]) {
            
            message.channel.send(quotes.section[args[0]].quotes[args[1]]);

        } else if(!args.length){

            var s = Math.floor(Math.random() * quotes.section.length)
            var q = Math.floor(Math.random() * quotes.section[s].quotes.length)

            message.channel.send(quotes.section[s].quotes[q]);
            
        } else {
            
            switch (args[0].toLowerCase()) {
                
                case 'classic':
                case 'c':
                    var q = Math.floor(Math.random() * quotes.section[s].quotes[1].length)
                    message.channel.send(quotes.section[1].quotes[q]);
                    break;

                case 'remastered':
                case 'r':
                    var q = Math.floor(Math.random() * quotes.section[s].quotes[2].length)
                    message.channel.send(quotes.section[2].quotes[q]);
                    break;

                case 'universe':
                case 'u':
                    var q = Math.floor(Math.random() * quotes.section[s].quotes[3].length)
                    message.channel.send(quotes.section[3].quotes[q]);
                    break;

                default:
                    message.channel.send('error');
                    break;
            }
        }


	},
};