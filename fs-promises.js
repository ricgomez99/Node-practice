const fs = require("node:fs/promises");

fs.readFile("./hola-mundo.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log(error.message);
  });
