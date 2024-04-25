const http= require("http");

const server= http.createServer((req,res)=>{
    if(req.url == "/"){
    res.end("Hello from server side Home Page")
    }
    else if(req.url == "/about"){
    res.end("Hello from server side AboutUs Page")

    }
    else if(req.url == "/contact"){
        res.end("Hello from server side Contact Page")
    
        }
    else{
        res.writeHead(404, {"Content-type": " text/html "});
        res.end("  <h1> 404 error pages. Page doesn't exist </h1>");
    }

});

server.listen(3000, "127.0.0.1",()=>{
    console.log("Listening from port no. 3000");
});