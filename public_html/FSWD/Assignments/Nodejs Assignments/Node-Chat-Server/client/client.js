const net = require('net');
const port = 9000;
const maxRetries=3;
const retryTimeout=1000;

let quitting =false;
let conn;
let retriedTimes=0;
let clientName = "";

process.stdin.resume();

clientName = (process.argv[2])?process.argv[2]+": ":"";

process.stdin.on('data',(data)=>{
	if(data.toString().trim().toLowerCase()==='quit'){
		quitting=true;
		console.log("I'm quitting...");
		conn.end();
		process.stdin.pause();
	}
	else{
		conn.write(clientName+data);
	}
});

(function connect(){
	function reconnect(){
		if(retriedTimes >=maxRetries){
			throw new Error('Ghastly Error!! :(.. Cant connect to server.');
		}
		retriedTimes++;
		setTimeout(connect,retryTimeout);
	}

	conn = net.createConnection(port);

	conn.on('connect',()=>{
		retriedTime=0;
		console.log('Connected to server! Type "quit" to log off!');
	});

	conn.on('error',(err)=>{
		console.log('Error in connection: ', err);
	});

	conn.on('close',()=>{
		if(!quitting){
			console.log(`Connection closed, will try to reconnect ${maxRetries} times!`);
			reconnect();
		}
	});

	conn.pipe(process.stdout,{end:false});
}());