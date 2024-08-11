const express = require("express");
const ClientModel = require("../Models/Client");
const EmailVerificationModel = require("../Models/EmailVerificiation"); //we have to do this for client and landlords
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const sendEmailVerification = require("../middleware/sendEmailVerification");
//const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET = "pawan";

router.post("/sendEmailVerification", async (req, res) => {
	try {
		await sendEmailVerification(req.body.emailID, EmailVerificationModel);
		return res.status(200).send("email sent ");
	} catch (error) {
		console.error(error.message);
		res.status(500).send("error occured here");
	}
});

router.post("/registerClient", async (req, res) => {
	// register for client
	try {
		//checking if the email is already in use
		let client = await ClientModel.findOne({ email: req.body.email });
		if (client) {
			return res.status(400).json({ error: "Email id already in use" });
		}
		// generating salt for bcryption
		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);
		const address = {
			// creating address object
			city: req.body.address.city,
		};

		client = await ClientModel.create({
			// creating client
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: address,
			password: secPass,
		});
		// creating a authtoken using our client's id
		const data = {
			user: {
				id: client.id,
				isLandlord: false,
				isSubscribed: false,
				firstName: client.firstName,
				lastName: client.lastName,
				email: client.email,
			},
		};
		//sending authtoken
		const token = jwt.sign(data, JWT_SECRET);
		return res
			.cookie("access_token", token, {
				httpOnly: true,
				//secure: process.env.NODE_ENV === "production",
			})
			.json(data.user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("error occured here");
	}
});

router.post("/clientLogin", async (req, res) => {
	try {
		const { email, password } = req.body;
		// finding a user with the given email
		let client = await ClientModel.findOne({ email: req.body.email });
		// if the user with the given email doesnt exist then we will return;
		if (!client) {
			return res.status(401).json({ error: "Bad credentials" });
		}
		// checking the password with the password in the database
		const passwordCompare = await bcrypt.compare(
			req.body.password,
			client.password
		);
		// if wrong password
		if (!passwordCompare) {
			return res.status(401).json({ errors: "Bad credentials" });
		}
		const data = {
			user: {
				id: client.id,
				isLandlord: false,
				isSubscribed: false,
				firstName: client.firstName,
				lastName: client.lastName,
				email: client.email,
			},
		};
		//sending htoken
		const token = jwt.sign(data, JWT_SECRET);
		return res
			.cookie("access_token", token, {
				httpOnly: true,
				//secure: process.env.NODE_ENV === "production",
			})
			.json(data.user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "some error occured here" });
	}
});

module.exports = router;
