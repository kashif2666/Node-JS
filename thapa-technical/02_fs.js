const fs=require("fs");


// to create a new file 
// fs.writeFileSync("read.txt", "Welcome to node.js");

// to rewrite a existing file 
// fs.writeFileSync("read.txt","Welcome to node.js to learn the back-end"); 

// to update a existing file 

// fs.appendFileSync("read.txt", " \n My name is Kashif Anwar"); 

// to read a file in binaray data 
// const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);

// to read a file in a normal lang. 
// const buf_data=fs.readFileSync("read.txt"); 
// console.log(buf_data.toString()); 

// method -2
// const data=fs.readFileSync("readwrite.txt", "utf8");
// console.log(data);

// delete a folder
// fs.unlinkSync("readwrite.txt");

// method-2 
// fs.rmdirSync("read.txt");




// to rename a file name 
// fs.renameSync("read.txt","readwrite.txt");

// fs.writeFileSync("new.js", "var a=2;"); 

