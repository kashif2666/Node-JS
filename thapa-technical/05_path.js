const path=require("path");


// to know directory
console.log(path.dirname('B:/full stack/NodeJS/thapa technical/05_path.js'));

// to know extension name 
console.log(path.extname('B:/full stack/NodeJS/thapa technical/05_path.js'));

// to know file name
console.log(path.basename('B:/full stack/NodeJS/thapa technical/05_path.js'));

// to know all in one
console.log(path.parse('B:/full stack/NodeJS/thapa technical/05_path.js'));

// to know only file name without extension
const mypath=path.parse('B:/full stack/NodeJS/thapa technical/05_path.js');
console.log(mypath.name);

// to know root only
console.log(mypath.root);