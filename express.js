const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("[Middleware Log]: This is the users route.");
  res.send("<h1>Hello users.</h1>");
});

app.use("/", (req, res, next) => {
  console.log("[Middleware Log]: This is the home route.");
  res.send("<h1>Hello from Express.</h1>");
});

app.listen(3000);
