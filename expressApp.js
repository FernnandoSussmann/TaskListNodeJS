const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const config = require('config');

const app = express();

app.listen(config.port);
app.use(bodyParser.json());

var taskList = [];

app.get('/list', function(req, res){
    res.send(taskList);
});

app.post('/task', [validationMiddleware, function(req,res){
    var task = req.body.task
    taskList.push(task);
    res.send(taskList);
}]);

app.put('/task/:task_index', [validationMiddleware, function(req, res){
    var taskIndex = req.params.task_index;
    taskList[taskIndex] = req.body.task
    res.send(taskList);
}]);

app.delete('/task/:task_index', function(req, res){
    var taskIndex = req.params.task_index;
    taskList.splice(taskIndex, 1)
    res.send(taskList);
});

function validationMiddleware(req, res, next){
     if(_.isEmpty(req.body.task)){
        return res.status(422).send("Task is empty");
    }
    return next();
}
