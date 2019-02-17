var express = require('express')

var app = express();
var port = 8081;

app.use(requestListener).listen(port);
console.log("Server is listening on ", port);

function requestListener(req, res) {
    console.log("responding now");
    res.send("Hello");
}
