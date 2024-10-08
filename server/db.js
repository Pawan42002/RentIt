const mongoose = require("mongoose");
require("dotenv").config();
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL =
	"mongodb+srv://pawan:pawan@cluster0.p4unm.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () => {
	mongoose.connect(MONGO_URL, {
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
