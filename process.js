const process = require("node:process");

// //Input arguments
// console.log(process.argv);

// // We can take controll of the process and its output
// process.exit(0); //-> Everything went fine so far
// process.exit(1); //-> Something went wrong

// //We can controll the process events
// process.on("exit", () => {
//   //clean the console
// });

//Current working directory method
console.log(process.cwd()); //-> shows the dir where the process has ben excecuted

//platform
console.log(process.env.PEPIN);
