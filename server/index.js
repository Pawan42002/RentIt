const express = require("express");
const mongoose = require("mongoose");
const connectToMongo = require("./db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const fetchUser = require("./middleware/fetchUser");
const bcrypt = require("bcryptjs");
const ClientModel = require("./Models/Client");
const LandlordModel = require("./Models/Landord");
const generateStrongPassword = require("./middleware/generateStrongPassword");
const { sendNewPassword } = require("./middleware/sendEmailVerification");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use("/api/listings", require("./routes/listings"));
app.use("/api/subscribe", require("./routes/subscribe"));

app.use("/api/businessAuth", require("./routes/businessAuth"));
app.get("/", (req, res) => {
	res.send("home");
});

app.get("/getUserData", fetchUser, async (req, res) => {
	res.send(req.user);
});

app.post("/logout", async (req, res) => {
	res.clearCookie("access_token");
	res.send("Logout successful");
});

app.listen(3005, () => {
	console.log("Running on port 3005");
});

app.post("/forgotPassword", async (req, res) => {
	try {
		let email = req.body.email,
			password = generateStrongPassword();
		let Model;
		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(password, salt);
		let type;
		if (req.body.type === "Client") {
			Model = ClientModel;
			type = "Client";
		} else {
			Model = LandlordModel;
			type = "Landlord";
		}
		let user = await Model.findOne({ email });
		if (!user) {
			res.status(200).send("Account does not exist");
		}
		await sendNewPassword(email, password, type);
		await Model.findOneAndUpdate({ email: email }, { password: secPass });
		res.status(200).send("Password sent to email");
	} catch (error) {
		res.json(error);
	}
});
