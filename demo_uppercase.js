/*var http = require('http');
var uc = require('upper-case');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello World!");
    res.end();
}).listen(8080);

var fs = require('fs');

var rs = fs.createWriteStream('./demofile.txt');

rs.on('open', function(){
    console.log('This file is open');
});*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');