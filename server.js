

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');

var additional = require("./utility/additional");

app.use(express.static(__dirname+"/view"));
app.use(express.static(__dirname+"/style"));
app.use(express.static(__dirname+"/js"));

app.use(bodyParser.urlencoded({
					limit: '150mb',							
					extended : false
			}));
app.use(bodyParser.json());

app.get('/', function(req, res){	
	res.sendfile(__dirname+"index.html");
});

app.get('/dashboard', function(req, res){
	res.sendfile(__dirname+"/view/dashboard.html");
});


app.post('/save', function(req, res){
	var data = additional.save_data(req.body, function(data){
		return data;
	});
	res.json(data);
});		

app.get('/fetch', function(req, res){
	res.json(additional.fetch_data(function(list_scoreDetals){
		return list_scoreDetails;
	}));
});		

app.post('/show',function(req, res){
	res.json(additional.show_data(req.body, function(listDetails){
		return listDetails;
	}));
});


app.post('/createMatch', function(req, res){
	res.json(additional.create_match(req.body, function(body){
		return body;
	}));

});

app.get('/fetchCreatedMatches', function(req, res){
	console.log("------------------------->");	
	res.json(additional.fetch_created_matches(function(list_matches){
			return list_matches;
	}));
	
});

io.on('connection', function(socket){
		console.log('a user connected');
		
		socket.on('send_score', function(msg){
			io.emit('send_score', msg);	
		});
		
		socket.on('create_match', function(msg){
			io.emit('create_match', msg);	
		});

		

});

http.listen(3000, function(){
	console.log('listening on *:3000');

});




