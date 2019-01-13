var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send('Hey guys!');
});


app.listen(port, function(){
console.log('rodando na porta'+port);
});
