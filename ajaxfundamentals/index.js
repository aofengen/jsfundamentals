const express = require('express'); //const fixes a value for a variable so it can't be changed
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res){ 
	res.sendFile(__dirname + '/index.html');
})

http.listen(3000,function(){
	console.log("Listening on port 3000");
})