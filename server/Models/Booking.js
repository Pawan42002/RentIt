const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
	clientEmail: {
		type: String,
		required: true,
	},
	landlordEmail: {
		type: String,
		require: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	listingID: {
		type: String,
		requied: true,
	},
	listingImage: {
		type: String,
		required: true,
	},
	listingLocation: {
		type: String,
		required: true,
	},
});

const BookingModel = mongoose.model("booking", BookingSchema);
module.exports = BookingModel;
