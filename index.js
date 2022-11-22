const express = require('express');
const mysql = require('mysql');
var cors = require('cors')
const app = express();
const port = 0;
const con = mysql.createConnection({
  host: "snip",
  user: "snip",
  password: "snip",
  database: "snip"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
var bodyParser = require('body-parser');
function mapToObj(inputMap) {
    let obj = {};

    inputMap.forEach(function(value, key){
        obj[key] = value
    });

    return obj;}



app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(cors())
var serverArr = new Map();
var FjobId = new Map();
var FChat = new Map();
var command = new Map();
app.get('/', (req, res) => {
  res.send('yikes');
});

app.post('/api/v1/update', (req, res) => {
    
    var jobId = req.query.jobId; // res.query = GET arguments (the ones in the URL)
    var placeId = req.query.placeId;
    var placeName = req.query.placeName;
    if (serverArr.has(jobId) === true){ // if server already exists
        //console.log('Query (\x1b[33m'+req.query.jobId+'\x1b[0m) pinged server for keepAlive\x1b[0m');
		
        // do something with all the tables before they are cleared
        // H
        // E
        // R
        // E
        // !
    } else {
        console.log('\x1b[32mNew Server detected | JobId: \x1b[33m' + jobId + '\x1b[32m | PlaceId: \x1b[33m' + placeId+'\x1b[32m | PlaceName: \x1b[33m' + placeName + '\x1b[0m');
    }
    
    let time = Date.now();
    let chatlogs = req.body.chatlogs;
    let plrs = req.body.players
	let nextUpdate = time+((45)*1000) // 4.5*10^4
    
    serverArr.set(jobId, {time, placeId, placeName, chatlogs, plrs, nextUpdate});
    
    
   res.status(200);
	res.send('response: [ok]');
})
app.get('/api/v1/servers',cors(),(req,res) => {
            res.send(JSON.stringify(mapToObj(serverArr)))
 
    })
app.get('/api/v1/updateFocused',(req,res,flag) => {
 		FjobId.clear()
		flag = req.query.flag
		jid = req.query.jobId
		usr = req.query.user
if(flag=="set"){
             FjobId.set(jid, {usr})
}else if (flag=="clear"){
	FjobId.clear()
}
res.status(200);
	res.send('response: [ok]');
    })
app.get('/api/v1/focused',(req,res) => {
           res.send(JSON.stringify(mapToObj(FjobId)))
    })

app.get('/api/v1/updateChatted',(req,res,flag) => {
 		FChat.clear()
		flag = req.query.flag
		job = req.query.jid
		ch = req.query.chat
		usr = req.query.user
if(flag=="set"){
             FChat.set(ch, {usr,job})
}else if (flag=="clear"){
	FChat.clear()
}
res.status(200);
	res.send('response: [ok]');
    })
app.get('/api/v1/getChat',(req,res) => {
           res.send(JSON.stringify(mapToObj(FChat)))
    })

app.get('/api/v1/isAdded',(req,res) => {
let user = req.query.user
let pass = req.query.pass

       
  
	  var sql = `SELECT * FROM accounts WHERE accounts.Username = '${user}' AND accounts.Password = '${pass}'`;
  
	  
  con.query(sql, function (err, result) {
   if (err) {
	   res.send(err);
   }else{
    console.log(result);
    res.send(result);
   }
  });
 
    })
   
app.get('/api/v1/banhandler',(req,res) => {
	let flag = req.query.flag
	let uid = req.query.uid;
	let time = req.query.time;
	let reas = req.query.reason;
	let endtime = req.query.endtime


if(flag == "add"){

	  var sql = "INSERT INTO bans (uid,time,reason,endtime) VALUES ("+uid+","+time+",'"+reas+"','"+endtime+"')";
  
	  
  con.query(sql, function (err, result) {
   if (err) {
	   res.send(err);
   }else{
    console.log(result);
    res.send(uid + " has been banned for "+time+" Reason: "+reas+" | Ban ends: "+endtime);
   }
  });


};
if(flag=="view"){
	

  con.query("SELECT * FROM bans WHERE uid = "+uid, function (err, result) {
 
    
	res.send(JSON.stringify(result));
  });


};
	if(flag=="remove"){
	
  var sql = "DELETE FROM bans WHERE uid = "+uid;
  con.query(sql, function (err, result) {
    if (err) throw err;
	res.send(uid +" was removed")
    console.log("Number of records deleted: " + result.affectedRows);
  });

	};
})
	app.get('/api/v1/commands/',(req,res) => {
		let job = req.query.job;
		let cmd = req.query.cmd;
		let flag = req.query.flag
		let key = req.query.key
		let player = req.query.plr
		let bool = req.query.bool
		let rank = req.query.rank
		var arr = {jobid: job, cmd: cmd};
		if(job){
		command.set(key, {job, cmd, player, bool, rank});
		}
		if (flag == "clean"){
			if (!key) {
			command.clear();
			}else{
			command.delete(key);
			}
		}
	//res.send(JSON.stringify(arr));
	res.send(JSON.stringify(mapToObj(command)));
	})
var listener = app.listen(port,() => {
  console.log('\x1b[31m[AT]\x1b[32m Backend web handler is running.\n\x1b[0mCurrently listening on port: \x1b[33m'+listener.address().port+'\x1b[0m');
})

setInterval( function timer(){
    for (const [key, value] of serverArr.entries()) {
        var nowTime = Date.now();
        if( ((nowTime-value['time'])/1000) >= 45 ){
            serverArr.delete(key);
        }
    }
}, 5000 );
