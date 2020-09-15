 var http = require('http');
 // var fs = require('fs');

 //  http.createServer(function(req, res){
 //  	res.writeHead(200, {"content-Type":"Text/html"});
 //  	var data=fs.readFileSync(__dirname + "/index.html", "utf-8");
 //  	res.end(data);
 //  }).listen(84);
 //  
 //   var http = require('http');
 var fs = require('fs');

  http.createServer(function(req, res){
  	res.writeHead(200, {"content-Type":"Text/html"});
  	var data=fs.readFileSync(__dirname + "/index.html", "utf-8");

  	data= data.replace("{a}","Linh");
  	// fs.createReadStream(__dirname + "/index.html").pipe(res);
 
  }).listen(88);