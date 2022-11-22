
// THIS IS WHERE THE COMMAND GETS SENT TO THE WEBAPP
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const prefix = "-";
const { readdirSync } = require('fs');
module.exports = {
    data: {
        name: `remoteModal`
    },
    async execute(interaction, bot){
        
       
        let input = interaction.fields.getTextInputValue("commandInput");
        let args = input.split(' ');
        
       
      
        const Http = new XMLHttpRequest();
        const url="http://main.ikryptxc.link:21212/api/v1/commands?key=bot&job="+args[0]+"&cmd="+args.slice(1).join(" ")+"&plr="+ interaction.user.username +"&rank=9";
        Http.open("GET", url);
        Http.send();
        await interaction.reply({
           
           content: `"${input}" has been parsed!`
        });
        const Http2 = new XMLHttpRequest();
        const url2="http://main.ikryptxc.link:21212/api/v1/updateFocused?jobId=null&user=null&flag=clear";
        Http2.open("GET", url2);
        Http2.send();
    }
}
