// Require the necessary discord.js classes
// Connecting to discord client
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
// This is a default intent don't remove it
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login('paste-your-bot-token-here');
// Informs if the client gets Logged in
console.log(`Logged in as: ${client.user}`);
