var express = require('express');
var app = express();

//Expose static content
app.use(express.static('public'));

//Routes
app.get('/', function(req, res){
    res.send("xx");
});

//Server
var server = app.listen(3000, function(){
    var port = server.address().port;
    var host = server.address().address;
    (host == '::') ? host = 'localhost' : host = host;
    console.log('MFS Listening at http://%s:%s',host, port);
});
