const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LandlordEmailVerificationSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	code: {
		type: String,
		required: true,
	},
});

const LandlordEmailVerificationModel = mongoose.model(
	"landlordEmailVerification",
	LandlordEmailVerificationSchema
);

module.exports = LandlordEmailVerificationModel;
