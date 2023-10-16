import fs from "node:fs/promises";

const text = await fs.readFile("./textFile-2.txt", "utf-8");

console.log(text);
