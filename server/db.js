const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://pawan:pawan@cluster0.yycs5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
      try {
        console.log("Connected to Database");
      } catch (err) {
        throw err;
      }
    }
  );
};

module.exports = connectToMongo;
