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

client.on('guildMemberAdd', member => {
	let channel = member.guild.channels.cache.get('ID DE CANAL DONDE SE ENVIARAN BIENVENIDA');
	if(!channel) return;
	channel.send("Bienvenido: " + member.user.tag);
});
	
 
 
client.login("AQUI_VA_EL_TOKEN_OMEGALUL");
