const express= require("express");
const app=express();
let PORT=5000;

const sendMail=require("./controllers/sendMail.js"); 

app.get("/",(req,res) =>{
    res.send("I am a server");
});

app.get("/sendemail", sendMail); 

const start= async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am live in port no. ${PORT}`);
        });
    } catch (error) {}
};

start();