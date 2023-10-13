const os = require("node:os");
const cpus = os.cpus();

console.log("Operation System Information.");
console.log("------------------------------");

console.log("Operation System Information.");
console.log("Architecture:", os.arch());
console.log("Version:", os.release());
console.log("Name:", os.platform());
console.log("CPUs:", cpus); //--> We can escalate processes with Node
console.log("Free Memory:", os.freemem() / 1024 / 1024);
console.log("Total Memory:", os.totalmem() / 1024 / 1024);
