module.exports = {
	name: 'auer',
	description: 'link to bauer',
	execute(message, args) {

		if (typeof args[0] != 'undefined' || args[0] != null) {
			switch (args[0]) {
				case 'bauer':
					message.channel.send({embed: {
						title: "The War for New Detroit",
						url: "https://docs.google.com/document/d/1hz4mx-bgiXH-3rh9uxLUtW7CmJle-NVrkBMmfBGPzck/",
						fields: [{
							name: "Downloads:",
							value: "[Microsoft Word](https://cdn.discordapp.com/attachments/583104406317301773/583291743223545886/The_War_for_New_Detroit.docx)\n[Plain Text](https://cdn.discordapp.com/attachments/583104406317301773/583291314792038411/The_War_for_New_Detroit.txt)\n[PDF Document](https://cdn.discordapp.com/attachments/583104406317301773/583290543606464523/The_War_for_New_Detroit.pdf)\n[EPUB Publication](https://cdn.discordapp.com/attachments/583104406317301773/583291114102980618/The_War_for_New_Detroit.epub)",
						}],
            footer: {
					    text: '© Christopher Nokes'
				    }
					}});
					break;
				case 'hark':
					message.channel.send({embed: {
						title: "The Matthew Hark Story",
						url: "https://docs.google.com/document/d/1ZPmLpFfGh7Dd9jzMhqVg4Gzfmr-G68NBscTSZ3t-kbg/",
						fields: [{
							name: "Downloads:",
							value: "[Microsoft Word]()\n[Plain Text]()\n[PDF Document]()\n[EPUB Publication]()",
						}],
            footer: {
					    text: '© BOTTOM TEXT'
				    }
					}});
					break;
				case 'waaagh':
					message.channel.send({embed: {
						title: "‘Da WAAAGH! For New Detroit",
						url: "https://docs.google.com/document/d/1VP4hwBqrMxq_bLUjwBn6FKyCGKfIB27LIc9M6zmH_OM/",
						fields: [{
							name: "Downloads:",
							value: "[Microsoft Word]()\n[Plain Text]()\n[PDF Document]()\n[EPUB Publication]()",
						}],
            footer: {
					    text: '© BOTTOM TEXT'
				    }
					}});
					break;
				default:
					message.channel.send(`Invalid Argument(s): \`${args}\` for command \`link\`.`,{embed: {
						fields: [{
							name: "Valid Arguments:",
							value: "bauer\nhark\nwaaagh",
						}],
					}});
					break;
			}
		} else {
			message.channel.send({embed: {
				title: "The War for New Detroit",
				url: "https://docs.google.com/document/d/1hz4mx-bgiXH-3rh9uxLUtW7CmJle-NVrkBMmfBGPzck/",
				fields: [{
					name: "Downloads:",
					value: "[Microsoft Word](https://cdn.discordapp.com/attachments/583104406317301773/583291743223545886/The_War_for_New_Detroit.docx)\n[Plain Text](https://cdn.discordapp.com/attachments/583104406317301773/583291314792038411/The_War_for_New_Detroit.txt)\n[PDF Document](https://cdn.discordapp.com/attachments/583104406317301773/583290543606464523/The_War_for_New_Detroit.pdf)\n[EPUB Publication](https://cdn.discordapp.com/attachments/583104406317301773/583291114102980618/The_War_for_New_Detroit.epub)",
				}],
				footer: {
					text: '© Christopher Nokes'
				}
			}});
		}
	},
};
