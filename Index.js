var http = require("http");

http.
    createServer(function (request, response){
response.writeHead(200, {"content-type":"text/plain" });    
    response.end("Hello, World");
})
    .listen(8000,"127.0.0.1");
console.log("Servidor executando em http//127.0.0.1:8000/");
 