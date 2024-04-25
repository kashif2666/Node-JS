const fs=require("fs");


// to create a file
// fs.writeFile("read.txt","Hello World", (err)=>{
//     console.log("File created");
//     console.log(err);
// });

// to update a file
// fs.appendFile("read.txt","\n Kaise hai aap ?",(err)=>{
//     console.log("Task completed");
//     console.log(err);

// });

// to read a file
fs.readFile("read.txt", "utf-8",(err,data)=>{
    console.log(data);
});