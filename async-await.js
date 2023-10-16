const fs = require("node:fs/promises");

(async () => {
  const text = await fs.readFile("./hola-mundo.txt", "utf-8");
  console.log(text);
})();
