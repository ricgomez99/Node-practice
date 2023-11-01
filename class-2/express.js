const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 1234;
const ditto = require("./pokemon/ditto.json");

// Removes the x-powered-by Response header
app.disable("x-powered-by");

// Middleware Example
// app.use((req, res, next) => {
//   console.log("My first middleware!");
//   // Track the request to the DB
//   // Check if user has cookies
//   next();
// });

// Middleware Opt 1
app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  // Only handles POST requests and with headers Content-Type: application/json
  let body = "";
  // Listen to data event
  req.on("data", (chunck) => {
    body += chunck.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now().toLocaleString();
    // Mutates the request and inserts the data into req.body
    res.body = data;
    next();
  });
});

// Middleware Opt2 Native express middleware
// app.use(express.json());

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  // We should save req.body into the DB
  res.status(201).json(req.body);
});

// Error Handling
app.use((req, res) => {
  res.status(404).send("<h1>Page not found 404</h1>");
});

app.listen(PORT, () => {
  console.log(`app listening on port: http://localhost:${PORT}`);
});
