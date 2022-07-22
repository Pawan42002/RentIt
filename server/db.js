const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = () => {
  mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Database connected");
  });
};

module.exports = connectToMongo;
