const http= require("http");
const fs=require("fs");

const data=fs.readFileSync(`${__dirname}/userapi.json`,"utf-8");
const objData=JSON.parse(data);



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
        else if(req.url == "/userapi"){
            // fs.readFile(`${__dirname}/userapi.json`,"utf-8",
            // (err,data)=>{
            //     console.log(data);
            //     const objData=JSON.parse(data);
                // res.end(objData[2].name);
            // })
            // res.end("Hello from userAPI side ")


            // method-2
            res.writeHead(200,{"content-type": "application/json"});
                res.end(objData[3].name);

        
            }
    else{
        res.writeHead(404, {"Content-type": " text/html "});
        res.end("  <h1> 404 error pages. Page doesn't exist </h1>");
    }

});

server.listen(1000, "127.0.0.1",()=>{
    console.log("Listening from port no. 1000");
});