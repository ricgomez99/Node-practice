const fs = require("node:fs");

//Reads the directory
fs.readdir(".", (error, files) => {
  if (error) {
    console.log(error.message);
    return;
  }

  files.forEach((file) => console.log(file));
});
