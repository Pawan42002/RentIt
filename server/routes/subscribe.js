const express = require("express");
const ListingModel = require("../Models/Listing");
const LandlordModel = require("../Models/Landord");
const ClientModel = require("../Models/Client");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_TOKEN = "pawan";
// add address back again here
router.post("/addSubscription", fetchUser, async (req, res) => {
	try {
		const data = {
			user: {
				id: req.user.id,
				isLandlord: req.user.isLandlord,
				isSubscribed: true,
			},
		};
		if (data.user.isLandlord) {
			const res = await LandlordModel.findOneAndUpdate(
				{ _id: data.user.id },
				{ isSubscribed: true }
			);
		} else {
			await ClientModel.findOneAndUpdate(
				{ _id: data.user.id },
				{ isSubscribed: true }
			);
		}
		const token = jwt.sign(data, JWT_TOKEN);
		res
			.cookie("access_token", token, {
				httpOnly: true,
				//secure: process.env.NODE_ENV === "production",
			})
			.json({
				email: data.user.id,
				isLandlord: req.user.isLandlord,
				isSubscribed: true,
			});
		return;
	} catch (err) {
		return res.sendStatus(403).json({ message: err });
	}
});

router.post("/removeSubscription", fetchUser, async (req, res) => {
	try {
		const data = {
			user: {
				id: req.user.id,
				isLandlord: req.user.isLandlord,
				isSubscribed: true,
			},
		};
		if (data.user.isLandlord) {
			const res = await LandlordModel.updateOne(
				{ id: data.user.id },
				{ isSubscribed: true }
			);
			console.log(res);
		} else {
			await ClientModel.updateOne({ id: data.user.id }, { isSubscribed: true });
		}
		const token = jwt.sign(data, JWT_TOKEN);
		res.clearCookie("access_token");
		return res
			.cookie("access_token", token, {
				httpOnly: true,
				//secure: process.env.NODE_ENV === "production",
			})
			.json({
				email: data.user.id,
				isLandlord: req.user.isLandlord,
				isSubscribed: true,
			});
	} catch (error) {
		res.json("Error");
	}
});

module.exports = router;
