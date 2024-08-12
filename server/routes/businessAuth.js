const express = require("express");
const LandlordModel = require("../Models/Landord");
const LandlordEmailVerificationModel = require("../Models/LandlordEmailVerification");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const sendEmailVerification = require("../middleware/sendEmailVerification");
//const JWT_SECRET = process.env.JWT_SECRET;
//we have to create an email verification part here too
const JWT_SECRET = "pawan";
router.post("/sendEmailVerification", async (req, res) => {
	try {
		await sendEmailVerification(req.body.email, LandlordEmailVerificationModel);
		return res.status(200).send("email sent");
	} catch (error) {
		console.error(error.message);
		res.status(500).send("error occured heree");
	}
});
router.post("/verifyOTP", async (req, res) => {
	try {
		let userCode = req.body.code;
		let userEmail = req.body.email;
		let user = await LandlordEmailVerificationModel.findOne({
			email: userEmail,
		});
		if (!user) {
			return res.status(200).send("email not found");
		}
		if (user.code === userCode) {
			return res.status(200).send("OTP verified successfully");
		} else {
			return res.status(200).send("OTP does not match");
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).send("error occured here");
	}
});

router.post("/registerLandlord", async (req, res) => {
	try {
		//checking if the email is already in use
		let landlord = await LandlordModel.findOne({ email: req.body.email });
		if (landlord) {
			return res.status(400).json({ error: "Email id already in use" });
		}
		// generating salt for bcryption
		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);
		const address = {
			// creating address object
			city: req.body.address.city,
		};

		landlord = await LandlordModel.create({
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
				id: landlord.id,
				isLandlord: true,
				isSubscribed: false,
				firstName: landlord.firstName,
				lastName: landlord.lastName,
				email: landlord.email,
				emailVerified: landlord.emailVerified,
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

router.post("/loginLandlord", async (req, res) => {
	try {
		const { email, password } = req.body;
		// finding a user with the given email
		let landlord = await LandlordModel.findOne({ email: req.body.email });
		// if the user with the given email doesnt exist then we will return;
		if (!landlord) {
			return res.status(401).json({ error: "Bad credentials" });
		}
		// checking the password with the password in the database
		const passwordCompare = await bcrypt.compare(
			req.body.password,
			landlord.password
		);
		// if wrong password
		if (!passwordCompare) {
			return res.status(401).json({ errors: "Bad credentials" });
		}
		const data = {
			user: {
				id: landlord.id,
				isLandlord: true,
				isSubscribed: false,
				firstName: landlord.firstName,
				lastName: landlord.lastName,
				email: landlord.email,
				emailVerified: landlord.emailVerified,
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
		console.log(error);
		res.status(500).json({ error: "some error occured here" });
	}
});

module.exports = router;
