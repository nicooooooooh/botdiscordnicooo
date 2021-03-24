const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
	client.user.setPresence({
		status:"online",
		activity: {
			name: "mi DM en caso de que tengas alguna duda",
			type: "WATCHING"
		}
	})
}
client.on("ready", () => {
    console.log("Bot Activo");
	presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("!status")) {
     message.channel.send("**Activo**");
   }
 
 });
 
 
client.login("AQUI_VA_EL_TOKEN_OMEGALUL");