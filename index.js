const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server); 

server.listen(3000);

app.get('/', (request, response) => {
	response.sendFile( __dirname + '/index.html'); 
});

app.get('/cadastro', (request, response) => {
	response.sendFile( __dirname + '/cadastro.html'); 
});



io.on('connection', (socket) => {

 	console.log(`New Client Connected `);

	socket.on('chat.message', (message)=>{
		io.emit('chat.message', message)
	}) 

})