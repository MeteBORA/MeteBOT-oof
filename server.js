const Discord = require("discord.js");
const bot = new Discord.Client();
let prefix = "!";
let version = Discord.version;
const embed = new Discord.RichEmbed();
let kod = Math.floor(Math.random() * 4);
let bad = [
  "piç",
  "oç",
  "orospu",
  "amcık",
  "amk",
  "orospu çocuğu",
  "orospu cocu",
  "orospu çocu",
  "sikerim",
  "sikicem",
  "yarrak",
  "yarak",
  "awk",
  "mk",
  "mq",
  "yarram",
  "yaram",
  "sie",
  "siktir"
];

bot.on("ready", () => {
  console.log(`Giriş yapıldı: ${bot.user.tag}!`);
  bot.user.setActivity(`${bot.users.size} kişiyle`);
  let statuses = [
    `${bot.guilds.size} tane sunucuyu`,
    "!yardım",
    "!temizle",
    "sen anan yani",
    "Seni",
    `${bot.users.size} kişiyi`
  ];
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, { type: "WATCHING" });
  }, 3000);
});
bot.on("message", message => {
  if (message.content === prefix + "temizle") {
    message.reply("Mesajlar temizleniyor...").then(msg => msg.delete(3000));
    message.channel.bulkDelete(100);
  }
});
bot.on("message", msg => {
  if (msg.content == "!hack") {
    msg.channel.send("Hack başladı").then(msg => {
      setTimeout(function() {
        msg.edit("Rastgele kullanıcı (isim yok)");
        setTimeout(function() {
          msg.edit("İsim: *Z*+H*1*_+*R*T*K+*B*");
          setTimeout(function() {
            msg.edit("IPsi: 193.487.25.76");
          }, 3000);
        }, 4000);
      }, 3000);
      setTimeout(function() {
        msg.channel
          .send("Mesaj siliniyor..")
          .then(msg => msg.channel.bulkDelete(2));
      }, 14000);
    });
  }
});
bot.on("message", message => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    let foundInText = true;
    for (var i in bad) {
      if (message.content.includes(bad[i])) foundInText = true;
      {
        if (foundInText) {
          message.delete(2000);
          message.channel.send(`${message.author} Kötü kelimeler yok!`);
        }
      }
    }
  }
});

bot.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "banla":
      if (message.member.hasPermission("ADMINISTRATOR")) {
        if (!args[1])
          message.channel.send(
            `${message.author.username} Birini belirtmen gerekli!`
          );
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban("Sunucudan banlandın!").then(() => {
                message.delete();
                message.reply(`Başarıyla ${user.tag} banlandı!`);
              })
              .catch(err => {
                message.reply("Banlanamadı!");
                console.log(err);
              });
          }
        }
      }
  }
});
bot.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "at":
      if (message.content === "!at") {
        if (!args[1])
          message.channel.send(
            `${message.author.username} Birini belirtmen lazım!`
          );
        const user = message.mentions.users.first();

        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick("Atıldın")
              .then(() => {
                message.reply(`Başarıyla ${user.tag} atıldı`);
              })
              .catch(err => {
                message.reply("Atılamadı");
                console.log(err);
              });
          } else {
            message.reply("Öyle birisi bu sunucuda yok");
          }
        }
        break;
      }
  }
});
bot.on("message", msg => {
  if (msg.content === "sa") {
    msg.reply("```*AS*```");
    console.log("sa/as verildi ");
  }
});
bot.on("message", msg => {
  if (msg.content === "selam") {
    msg.reply("```*Aleykümselam*```");
    console.log("selam verildi");
  }
});
bot.on("message", msg => {
  if (msg.content === "naber") {
    msg.reply("```Iyidir senden?```");
    console.log("cevap gönderildi");
  }
});

bot.on("message", message => {
  msg = message.content.toLowerCase();
  if (message.author.bot) return;
  mention = message.mentions.users.first();
  if (msg.startsWith(prefix + "mesaj")) {
    if (mention == null) {
      return;
    }
    message.delete();
    mentionMessage = message.content.slice(6);
    mention.sendMessage(mentionMessage);
    message.channel.send("Gönderildi").then(message => message.delete(3000));
  }
});
bot.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "bilgi":
      if (message.content === "!bilgi") {
        const embed = new Discord.RichEmbed()
          .setTitle("Kullanıcı Bilgileri")
          .addField("Sunucu Oluşturulma Tarihi", message.guild.createdAt)
          .addField("Sunucu Bölgesi", message.guild.region)
          .addField("Kullanıcı İsmi", message.author.username)
          .addField("Kullanıcı İsmi ve Etiketi", message.author.tag)
          .addField("Şu Anki Server İsmi", message.guild.name)
          .addField("Prefix", prefix)
          .setThumbnail(message.author.displayAvatarURL)
          .addField("Serverlar", bot.guilds.size)
          .addField("API Versiyonu", version)
          .setColor("RANDOM")
          .setFooter(
            `${message.author.username} tarafından istendi`,
            message.author.displayAvatarURL
          );

        message.channel.sendEmbed(embed);
        break;
      }
  }
});

bot.on("message", message => {
  if (message.content.toLowerCase() === prefix + "durum")
    message.channel.send("Server:    " + version);
});
bot.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "ping") {
    msg.channel.send("Şu anki pingim bu biladerim: " + bot.ping);
  }
});

bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.name === "hoşgeldin"
  );
  if (!channel) return;
  channel.send(`Hoşgeldin ${member}!`);
});
bot.on("guildMemberRemove", member => {
  member.guild.channels
    .get("650743357005496374")
    .send(
      member.user.username +
        ` serverdan çıktı! Şimdi ${member.guild.memberCount} kişiyiz!`
    );
});
bot.on("message", msg => {
  let args = msg.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "yardım":
      if (msg.content === "!yardım") {
        const embed = new Discord.RichEmbed()
          .setTitle("Yardım[MeteBOT]")
          .addField("!yardım", "Bunu gösterir.")
          .addField("!ping", "Botun hızını gösterir.")
          .addField("!durum", "Botun durumunu gösterir")
          .addField("!bilgi", "Komudu kullanan kişinin bilgilerini gösterir.")
          .addField(
            "!mesaj",
            "İstenilen kişiye bot aracılığıyla mesaj[dm] gönderir. [!mesaj @Birisi {mesajıniz}]"
          )
          .addField(
            "!at",
            "Belirtilen kişiyi sunucudan atar. [!at @Birisi#1234]"
          )
          .addField(
            "!banla",
            "Belirtilen kişiyi sunucudan yasaklar.[!banla @Birisi#1234]"
          )
          .addField("!hack", "Hack açar(sahte,eğlencesine)")
          .addField(
            "!temizle",
            "Bu mesajın gönderildiği kanaldan 100 mesajı siler."
          );
        msg.channel.send(embed);
        break;
      }
  }
});
var coinFlipCommand = function(message) {
  var coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 1) {
    message.channel.send("Para düştü, sonuç: ```DINO```");
  } else {
    message.channel.send("Para düştü lan, sonuç: ```PASPAS```");
  }
};
bot.on("message", message => {
  var commandMessage = message.toString();
  if ((commandMessage = commandMessage.slice(2)));
  console.log(commandMessage);
  if (commandMessage.startsWith("para çevir")) {
    coinFlipCommand(message);
  }
});
bot.login("NjUwMzgyNjUyMTc1ODEwNjAw.XeL0Iw.E1nD6_flqzOSKxXFGC71L2-HlkE");
