var path = require('path');
var express = require('express');
var app = express();
var staticRoot = path.join(__dirname+'/public/');

//Expose static content
app.use(express.static('public'));

//Routes
app.get('/mf', function(req, res){
    res.sendFile(staticRoot+"index.html");
});

//Server
var server = app.listen(3000, function(){
    var port = server.address().port;
    var host = server.address().address;
    (host == '::') ? host = 'localhost' : host = host;
    console.log('MFS Listening at http://%s:%s',host, port);
});
