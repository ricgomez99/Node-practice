const net = require("node:net");

function getPort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.on("error", (error) => {
      if (error.code !== "EADDRINUSE") {
        reject(error);
      } else {
        console.log(`port: ${port} is unavailable`);
        getPort(0).then((port) => resolve(port));
      }
    });

    server.listen(port, () => {
      const { port } = server.address();
      console.log(`server listening on port http://localhost:${port}`);
      server.close(() => {
        resolve(port);
      });
    });
  });
}

module.exports = { getPort };
