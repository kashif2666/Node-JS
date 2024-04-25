const fs=require("fs");
let text=fs.readFileSync("delete.txt","utf-8");
text=text.replace("Md.","Mohammad");
console.log("The content of file is    ");
console.log(text);

console.log("Creating new file");
fs.writeFileSync("Kashif.txt",text);
