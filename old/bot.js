const dc = require('discord.js');
const tk = 'snip';
const bot = new dc.Client();
const p = '.';
const ms = require('ms');
const ytdl = require('ytdl-core');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

var servers = {};
bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

bot.on('ready', () =>{
    console.log('AdminThingy bot initialized');
})
function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return bot.users.cache.get(mention);
	}
}

bot.on('messageCreate', m=>{
    if(!m.content.startsWith(p)) return;
    let args = m.content.substring(p.length).split(' ');

    switch(args[0]){
        case 'exe':
            let inp = encodeURIComponent(args.splice(2).join(' '));
            if(inp.match(/%0A/g)){
               filter = inp.match(/%0A/g);
                filter.replace("%0A","");
                inp = filter;
            };
            console.log(inp);
let lang = args[1];
if(!inp)  return m.channel.send("Select language and sc. ex: .exe javascript console.log('a');");
if(!lang)  return m.channel.send("Select language and sc. ex: .exe javascript console.log('a');");
function idGet(theUrl)
{
   
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    id = JSON.parse(xmlHttp.responseText).id
    outpGet('http://api.paiza.io:80/runners/get_details?id='+ id + '&api_key=guest');
}
function outpGet(theUrl)
{
   
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    if(JSON.parse(xmlHttp.responseText).build_stderr !== null || JSON.parse(xmlHttp.responseText).stderr === null){
        const embed = new dc.MessageEmbed()
        .setTitle(lang + " output")
.setAuthor("Fatal syntax error")
.setColor("#ff0000")
.addFields(
    
    
    
    { name: 'Error:', value: clean(JSON.parse(xmlHttp.responseText).build_stderr)},
)
.setDescription("")
.setFooter("bot made by iFractal#5440")
.setThumbnail()
.setTimestamp()

m.channel.send({embed})
return 0;
    };
    if(JSON.parse(xmlHttp.responseText).stderr === ""){
        const embed = new dc.MessageEmbed()
        .setTitle(lang + " output")
.setAuthor("Code executed with 0 errors")
.setColor("#00ff00")
.addFields(
    
    
    
    { name: 'Executed Output:', value: JSON.parse(xmlHttp.responseText).stdout},
)
.setDescription("")
.setFooter("bot made by iFractal#5440")
.setThumbnail()
.setTimestamp()

m.channel.send({embed})
    } else { 

        const embed = new dc.MessageEmbed()
        .setTitle("Something went wrong with " + lang + " execution")
.setAuthor("Build errors detected")
.setColor("#ff0000")
.addFields(
    
    
    
    { name: 'Error Output:', value: JSON.parse(xmlHttp.responseText).stderr},
)
.setDescription("")
.setFooter("bot made by iFractal#5440")
.setThumbnail()
.setTimestamp()

m.channel.send({embed})
    }
}

idGet('http://api.paiza.io:80/runners/create?source_code=' +inp + ';&language='+lang+'&longpoll=true&longpoll_timeout=3000&api_key=guest');


            break;
        case 'ping':
            m.reply('pong');
            break;
            
            case 'play':
                function playe(connection,m){
                        var server = servers[m.guild.id];
    
                       
    
                       
    
                        if(!server.queue[1])
				{server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}))}
					server.dispatcher.on("finish",function()
					{
						server.queue.shift()
						if(server.queue[0])
						{
							playe(connection,m)
						}
						else
						{
							server.queue.push(args[1]);
						}
					})
                };
    
    
    
                if(!args[1]){
                     m.channel.send('Incorrect # of arguments');
                        return;
                    }
                if(!m.member.voice.channel){
                    m.channel.send("Join a voice channel before using the command");
                };
                if(!servers[m.guild.id]) servers[m.guild.id] = {
                    queue: []
                }
                var server = servers[m.guild.id];
               
                server.queue.push(args[1]);
                if(!m.guild.voiceConnection) m.member.voice.channel.join().then(function(connection){
                    playe(connection, m);
                })
                break;
                case 'whitelist':
                    if(m.author.id !== '139907645225041920') return;
                  const targwl = getUserFromMention(args[1])
                    const Http3 = new XMLHttpRequest();
                    const url3="http://localhost/adminthingy/setRank.php?name="+targwl.username+"(discord)&rank="+targwl.id+"&reason=(Discord API)"+args.slice(2).join(" ");
                    Http3.open("GET", url3,false);
                    Http3.send();
                           m.channel.send("Whitelisted "+targwl.tag) 
                    break;
               case 'remotecmd':
              
                const Http4 = new XMLHttpRequest();
                const url4="http://localhost/adminthingy/GetRank.php?name="+m.author.username+"(discord)";
                Http4.open("GET", url4,false);
                Http4.send();
                if(m.author.id !== Http4.responseText) return m.channel.send('Not authorized');
                   if(!args[1] || !args[2]){
                       return m.channel.send("Incorrect # of arguments");
                   }
                    const Http1 = new XMLHttpRequest();
                    const url1="http://main.ikryptxc.link:21212/api/v1/servers";
                    Http1.open("GET", url1,false);
                    Http1.send();
                    for (var key in JSON.parse(Http1.responseText)) {
                      if(args[1] !== key){
                          return m.channel.send("Server not found or is lagging")
                      }
                    };
                const Http2 = new XMLHttpRequest();
                const url2="http://main.ikryptxc.link:21212/api/v1/commands?key=bot&job="+args[1]+"&cmd="+args.slice(2).join(" ")+"&plr="+ m.author +"&rank=9";
                Http2.open("GET", url2);
                Http2.send();
                        
                 
                

                break;
                
               
                case 'queue':
                var server = servers[m.guild.id];
                if(!servers[m.guild.id]) servers[m.guild.id] = {
                    queue: []
                }
                
                m.channel.send(server.queue);
               
                break;
        case 'connected':
            const Http = new XMLHttpRequest();
            const url="http://main.ikryptxc.link:21212/api/v1/servers";
            Http.open("GET", url,false);
            
            Http.send();
           
                
         
                const exampleEmbed = new dc.MessageEmbed()
	.setColor('#0000ff')
	.setTitle('Connected servers')
	
	.setAuthor(m.author.username)
	if(JSON.stringify(Http.responseText).length > 4){
    for (var key in JSON.parse(Http.responseText)) {
	exampleEmbed.addFields(
		{ name: "Server key: " + key, value: "Place: https://www.roblox.com/games/"+JSON.parse(Http.responseText)[key].placeId+"/ | Players: " + JSON.parse(Http.responseText)[key].plrs},
		
		
	)
   

    };

    }else{
        exampleEmbed.addFields(
            {name: "No servers connected",value: "No connections"}
        )
    };

m.channel.send(exampleEmbed);
            
            
            break;
        case 'skip':
            var server = servers[m.guild.id];
                if(server.dispatcher) server.dispatcher.end();
               
                break;
        case 'stop':
            var server = servers[m.guild.id];
          
              
                servers = {};
                server.dispatcher.end();
                m.channel.send('Playback cancelled');
                
            
            
                m.member.voice.channel.leave()
           
        break;

       
        

        case 'info':
            if(args[1] === 'author'){
                m.channel.send('iFractal#5440');
            }
            if(args[1] === 'usage'){
                m.channel.send('WIP');
            }
        break;
        case 'eval':

            if(m.author.id !== '689885147650064646') return;
    try {
      const code = args.slice(1).join(' ');
      let evaled = eval(code);
 
      //if (typeof evaled !== "string")
        //evaled = require("util").inspect(evaled);
        const embed = new dc.MessageEmbed()
        .setTitle("Code executed with 0 errors")
.setAuthor("JavaScript Output")
.setColor("#00ff00")
.addFields(
    
    
    { name: 'Reference Output:', value: `\`\`\`${clean(evaled)}\`\`\``, inline: true },
    { name: 'Executed Output:', value: `\`\`\`${clean(code)}\`\`\``, inline: true },
)
.setDescription("")
.setFooter("bot made by iFractal#5440")
.setThumbnail()
.setTimestamp()

m.channel.send({embed})
        
      
    } catch (err) {
        
        
        const embed = new dc.MessageEmbed()
        .setTitle("ERROR")
.setAuthor("JavaScript Output")
.setColor("#ff0000")
.addFields(
    
    
    
    { name: 'Error:', value: `\`\`\`${clean(err)}\`\`\``},
)
.setDescription("")
.setFooter("bot made by iFractal#5440")
.setThumbnail()
.setTimestamp()
m.channel.send({embed})

     // m.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
        case 'echo':
            
            
            m.delete()
            .then(
                m.channel.send(args.slice(1).join(' '))
                );
            
            
            break;
        case 'purge':
            if(!m.member.hasPermission('ADMINISTRATOR')) return;
            if(!args[1]) return m.channel.send('Incorrect # of arguments');

            if(!Number(args[1])){
              return;
            } else {
                m.channel.bulkDelete(args[1]);
                m.channel.send(args[1] + 'messages purged')
            }
        break;


        case 'quiet':
          
            if(!m.member.hasPermission('ADMINISTRATOR')) return m.channel.send('Insufficient perms');
            let targ = m.guild.member(m.mentions.users.first() || m.guild.members.cache.get(args[1]))
            if(!targ) return m.channel.send('User not found');

            let mrole = m.guild.roles.cache.find(role => role.name === "muted");

            if(!mrole) return m.channel.send('Muted role does not exist');
            if(!args[2]){
                
                m.channel.overwritePermissions([
           
                    {
                        id: targ.user.id,
                        deny: ['SEND_MESSAGES'],
                    },
                ]);
               // targ.roles.add(mrole.id);

                m.channel.send(targ.user.username + ' has been muted');
            }
            let time = args[2];

            
           // targ.roles.add(mrole.id);
           m.channel.overwritePermissions([
           
            {
                id: targ.user.id,
                deny: ['SEND_MESSAGES'],
            },
        ]);
            m.channel.send(targ.user.username + ' was muted for ' + ms(ms(time)));
           
           ticktock = setTimeout(function(){
                m.channel.overwritePermissions([
           
                    {
                        id: targ.user.id,
                        allow: ['SEND_MESSAGES'],
                    },
                ]);
               // targ.roles.remove(mrole.id);
                m.channel.send(targ.user.username + ' is now unmuted');
                
            },ms(time));
        
        
            break;
        
        case 'unmute':
            if(!m.member.hasPermission('ADMINISTRATOR')) return;
            let targ3 = m.guild.member(m.mentions.users.first() || m.guild.members.cache.get(args[1]))
            if(!targ3) return m.channel.send('User not found');
            function myStopFunction() {
                clearTimeout(ticktock);
              }
              myStopFunction();
            m.channel.overwritePermissions([
           
                {
                    id: targ3.user.id,
                    allow: ['SEND_MESSAGES'],
                },
            ]);

           // targ.roles.add(mrole.id);

            m.channel.send(targ3.user.username + ' is now unmuted');
            break;
        case 'kick':
            if(!m.member.hasPermission('ADMINISTRATOR')) return;
            let targ2 = m.guild.member(m.mentions.users.first() || m.guild.members.cache.get(args[1]))
            if(!targ2) return m.channel.send('User not found')
            if(!args[1]){
                m.channel.send(targ2.user.tag + ' was kicked.')
                targ2.kick()
            }
            m.channel.send(targ2.user.tag + ' was kicked for "'+ args.slice(2).join(" "))
            targ2.kick()

            break;
            
    }
});



bot.login(tk);