// JSON stands for JavaScript  object Notation
// It is a lightweight format for storing and transporting data.
// it is often used when data is sent from a server to a webpage


const biodata={
    name: "Kashif",
    age: 21,
    sex: "Male",
};

console.log(biodata.age);

// to convert object to JSON
const jsonData= JSON.stringify(biodata);
console.log(jsonData);

// to convert JSON to object
const objData= JSON.parse(jsonData);
console.log(objData);


// Some task
// 1. convert object to JSON
// 2. Add JSON to another file
// 3. read file
// 4. Again convert back json to object
// 5. console.log 
const fs= require("fs");

const bioData2={
name: "Irfan",
age: 22,
sex: "Male",
};

const jsonData2=JSON.stringify(bioData2);
console.log(jsonData2);
// fs.writeFile("json1.json", jsonData2, (err) => {
//     console.log("Done");
// });
fs.readFile("json1.json", "utf-8", (err,data)=>{
    const orgData= JSON.parse(data);
    console.log(data);
    console.log(orgData);
})