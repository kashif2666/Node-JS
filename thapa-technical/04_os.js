const os=require("os");

// to print os architecture
console.log(os.arch());

// to check free memory
const freemem=os.freemem();
console.log(`Free Memory is ${freemem / 1024 /1024 /1024} GB`);

// total memory
const totalmem=os.totalmem();
console.log(`Total Memory is ${totalmem / 1024 /1024 /1024} GB`);

// to know hostname
console.log(os.hostname());

//to know platform
console.log(os.platform());

// to know type of pc
console.log(os.type());
