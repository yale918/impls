var http = require('http');
var fs = require('fs');
var url = require('url');


var count = 0;
var server = http.createServer();
var targetFile = "";

server.on('request', function(request, response){
	if(request.url != "/favicon.ico"){
		count++;
		console.log("request "+count+" coming");
		console.log(request.method+" : "+request.url);
	}	

	if(request.url=='/')	targetFile = "index.html";
	else 					targetFile = "."+request.url;
	
	//var text = fs.readFileSync('test.html', "utf8");
	fs.readFile(targetFile,function(err, data){
		if(err) console.log(err);
		response.end(data);
	});
	
	//response.end(text);
	
});





server.listen(5566, function(){
	console.log("server is listening on: "+5566);
	
});