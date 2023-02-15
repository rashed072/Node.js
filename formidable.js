var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    /*The enctype attribute specifies how the form-data should be encoded when submitting it to the server.*/
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);