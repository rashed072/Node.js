/*var http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();   
    });
}).listen(8080);
var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello content!', function(err){
    if(err) throw err;
    console.log('Saved');
});
var fs = require('fs');

fs.open('mynewfile2.txt','w', function(err,file){
    if(err) throw err;
    console.log('Saved');
})

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello World!', function(err){
    if(err) throw err;
    console.log('Saved');
})

var fs = require('fs');

fs.appendFile('mynewfile.txt', 'This is my text', function(err){
    if (err) throw err;
    console.log('Updated!');
});*/

var fs = require('fs');

fs.rename('mynewfile2.txt','mynewfile1.txt',function(err){
    if(err) throw err;
    console.log('File Renamed!');
});