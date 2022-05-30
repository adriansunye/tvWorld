var http = require ('http');
var fs = require('fs');

var port = '8080';

var server = http.createServer(function (req, res) {
   if (request.url === '/') {
       fs.readFile('login.html', function(err, data){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data, 'utf-8');
       });
   } else if (request.url === '/css/global.css') {
       /*Read /css/custom.css file*/
   } else if (request.url === '/img/Retrotv.png') {
       /*Read /path/to/other.file*/
   }
}).listen(port);