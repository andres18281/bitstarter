var http = require('http');
var fs = require('fs');

http.createServer(funtion(request,response){
                  response.writeHead(200,{'Content-Type':'text/html'});
                   var content = fs.readFileSync('index.html',utf8');
                   response.end(content);
                 }).listen(1337);
                 console.log('Server running on 1337/');
