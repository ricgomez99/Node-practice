const http = require("node:http");
const { getPort } = require("./free-port");

const server = http.createServer((req, res) => {
  console.log("Request stablished");
  res.end("Hello World");
});

getPort(2000).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
});
