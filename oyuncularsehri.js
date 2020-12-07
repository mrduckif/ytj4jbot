const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Oyuncular Şehri | J4J BOT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let oyuncularsehri = await data.get(msg.author.id)
        
        if (oyuncularsehri === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("kanalıma abone olursan sunucuna gelebilirim \n \n If you subscribe to my channel, I can come to your server \n \n https://www.youtube.com/channel/UClWbhVU_uGwglG4UKVQ1-jQ?view_as=subscriber") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1800)
          await msg.channel.send("Done")
          await sleep(1900)
          await msg.channel.send("If you unsubscribe, I will leave your server \n")
          await sleep(1900)
          await msg.channel.send("abonelikten çıkarsan sunucundan çıkarım \n") 
      }
      }
    }
  }
})


client.on("guildCreate", oyuncularsehri => {
  sleep(1000);
  if (
    oyuncularsehri.id === "692044223255412776" ||  // j4j sunucusunun idsi
    oyuncularsehri.id === "692044223255412776"  // j4j sunucusunun idsi
  ) {
    
  } else {
    oyuncularsehri.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("778738213229559829") // j4j sunucusunun kanal id'si


       a.send("J4J DM")


      }, 70000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("778738213229559829") // j4j sunucusunun kanal id'si


       a.send("j4j DM me")


      }, 70000);
})

client.login("") // user tokeniniz
