const http = require("node:http");
const fs = require("node:fs/promises");
const { getPort } = require("../free-port");
const ditto = require("./pokemon/ditto.json");

const desiredPort = process.env.PORT ?? 1234;

const processFile = (res, path) => {
  fs.readFile(path)
    .then((data) => {
      res.setHeader("Content-Type", "image/png");
      res.end(data);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.end("<h1>Internal Server Error</h1>");
      console.log(err);
    });
};

const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(ditto));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>Page not found</h1>");
      }
    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";
          // Listen to data event
          req.on("data", (chunck) => {
            body += chunck.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            data.timestamp = Date.now().toLocaleString();
            res.end(JSON.stringify(data));
          });
          break;
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>Post denied</h1>");
      }
  }
};

const server = http.createServer(processRequest);

getPort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port: http://localhost:${port}`);
  });
});
