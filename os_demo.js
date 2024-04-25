const os=require('os');

// CPU Architecture
console.log(os.arch());

// OS Platform

console.log(os.platform());

// Cpu Object
// console.log(os.cpus());

// Memory left
console.log(os.freemem());

// Memory left
console.log(`Free Space: ${os.freemem()/1024/1024/1024} GB`);

// Total memory left
console.log(`Free Space: ${os.totalmem()/1024/1024/1024} GB`);


// Host name
console.log(os.hostname());