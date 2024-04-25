const chalk= require("chalk");
const validator= require("validator");


console.log(chalk.blue.bold.inverse("Hello!"));


const res=validator.isEmail("kashif.jsr2666gmail.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));