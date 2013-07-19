var http = require('http');
var fs = require('fs');

http.createServer(funtion(request,response){
                  response.writeHead(200,{'Content-Type':'text/plain'});
                   var content = fs.readFileSync('index.html','UTF8');
                   response.end(content);
                 }).listen(1337);
                 console.log('Server running on 1337/');
