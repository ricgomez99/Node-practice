import {
  cpus as _cpus,
  arch,
  release,
  platform,
  freemem,
  totalmem,
} from "node:os";
const cpus = _cpus();

console.log("Operation System Information.");
console.log("------------------------------");

console.log("Operation System Information.");
console.log("Architecture:", arch());
console.log("Version:", release());
console.log("Name:", platform());
console.log("CPUs:", cpus); //--> We can escalate processes with Node
console.log("Free Memory:", freemem() / 1024 / 1024);
console.log("Total Memory:", totalmem() / 1024 / 1024);
