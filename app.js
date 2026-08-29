const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Multi Environment CI/CD Demo !!"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

module.exports = app;