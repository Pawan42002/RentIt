const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailVerificationSchema = new mongoose.Schema({
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

const EmailVerificationModel = mongoose.model(
	"emailVerification",
	EmailVerificationSchema
);

module.exports = EmailVerificationModel;
