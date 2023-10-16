const fs = require("node:fs");

//Syncronous way of reading files: it works secuentially

console.log("Reading first file");
const file = fs.readFileSync("./hola-mundo.txt", "utf-8");

console.log("Do some other things");

console.log(file);

console.log("Reading second file");
const secondFile = fs.readFileSync("./textFile-2.txt", "utf-8");
console.log("Do more stuff");

console.log(secondFile);
