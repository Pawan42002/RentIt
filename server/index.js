const express = require("express");
const mongoose = require("mongoose");
const connectToMongo = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
connectToMongo();
app.use("/api/auth", require("./routes/auth"));
app.get("/", (req, res) => {
  res.send("home");
});

app.listen(3005, () => {
  console.log("runs");
});