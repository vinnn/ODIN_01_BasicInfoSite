// localhost:8080  to index.html
// localhost:8080/about  to about.html
// localhost:8080/contact-me  to contact-me.html
// otherwise  to 404.html 


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = "." + q.pathname;
    console.log("pathname : " + pathname);

    if (pathname == './') {
        renderHtmlFile('index.html', res);
    } else if (pathname == './about') {
        renderHtmlFile('about.html', res);  
    } else if (pathname == './contact-me') {
        renderHtmlFile('contact-me.html', res);  
    } else {
        renderHtmlFile('404.html', res);      
    }

}).listen(8080);



let renderHtmlFile = function (filename, res) {

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}




