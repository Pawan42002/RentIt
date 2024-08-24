const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListingModel = new mongoose.Schema({
	listing: { type: String },
});
const AddressSchema = new mongoose.Schema({
	city: {
		type: String,
		required: true,
	},
});

const BookingSchema = new mongoose.Schema({
	listingID: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
});

const ClientSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	address: AddressSchema,
	password: {
		type: String,
		required: true,
	},
	isSubscribed: {
		type: Boolean,
		default: false,
	},
	favourites: [ListingModel],
	bookings: [BookingSchema],
	date: {
		type: Date,
		default: Date.now,
	},
	emailVerified: {
		type: Boolean,
		default: false,
	},
});

const ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;
