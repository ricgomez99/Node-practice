import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./hola-mundo.txt", "utf-8"),
  readFile("./textFile-2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("first text: ", text1);
  console.log("second text: ", text2);
});
