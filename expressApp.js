var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8081;

app.listen(port);
app.use(bodyParser.json());

var taskList = [];
app.get('/list', function(req, res){
    res.send(taskList);
})

app.post('/task', function(req,res){
    taskList.push(req.body.task);
    res.send(taskList);
})
