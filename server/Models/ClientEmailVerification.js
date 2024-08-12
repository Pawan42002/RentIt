const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientEmailVerificationSchema = new mongoose.Schema({
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

const ClientEmailVerificationModel = mongoose.model(
	"clientEmailVerification",
	ClientEmailVerificationSchema
);

module.exports = ClientEmailVerificationModel;
