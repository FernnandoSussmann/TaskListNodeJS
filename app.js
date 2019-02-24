const http = require("http");
const port = 8081;

http.createServer(requestListener).listen(port);
console.log("Sever is listening on port:", port);

function requestListener(req,res){
    res.writeHead(200, {'Contenct-Type': 'text/plain'});
    console.log("Request received, responding now ...");
    res.end("Hello");
}
