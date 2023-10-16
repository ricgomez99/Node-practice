const fs = require("node:fs");

fs.readFile("./hola-mundo.txt", "utf-8", (error, text) => {
  console.log(text);
});

console.log("Doing some other things...");

fs.readFile("./textFile-2.txt", "utf-8", (error, text) => {
  console.log(text);
});

console.log("Finishing some things");
