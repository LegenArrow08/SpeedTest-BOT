const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

////////////////////////

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("🎉Yeni Üye", "🎉Yeni Üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Artık @üye rolüne sahipsin!")
	
});

////////////////////////

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.on('message', msg => {
    if (msg.content === 'discord.gg') {
     msg.delete(30)
      msg.reply('Reklam Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Fun Sunucusu') {
     msg.delete(30)
      msg.reply('Reklam Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Sunucumuz') {
     msg.delete(30)
      msg.reply('Reklam Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Sunucu İp Miz') {
     msg.delete(30)
      msg.reply('Reklam Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'oç') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'piç') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'pıc') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'amk') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'amq') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'aq') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'siktir') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Anan Oç') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'annen') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'oç') {
     msg.delete(30)
      msg.reply('sikik');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'piç kurusu') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'amınakodumun evladı') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ananı varya bi güzel sikerim') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'mqa') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'AMK') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Amk') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'aMk') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'amK') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'sg') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'SG') {
     msg.delete(30)
      msg.reply('Küfür Engellendi');
    }
  });
client.login(ayarlar.token);