const path = require("node:path");

//OS dir back-slash sperator - unix: / - windows: \
console.log(path.sep);

//Join routs with path.join independently from the OS
const filePath = path.join("content", "sub-folder", "test.txt");
console.log(filePath);

//Provides the file's name
const base = path.basename("/tmp/secret-files/password.txt/");
console.log(base);

//Provides file's name without prefix
const fileName = path.basename("/tmp/secret-files/password.txt/", ".txt");
console.log(fileName);

//Provides the file's extension name
const fileExt = path.extname("image.png");
console.log(fileExt);
