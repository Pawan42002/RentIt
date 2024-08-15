const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema({
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	zipcode: {
		type: String,
		required: true,
	},
});

const featureSchema = new mongoose.Schema({
	feature: {
		type: String,
		required: true,
	},
});

const imageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

const DetailsSchema = new mongoose.Schema({
	// flat details
	area: {
		type: String,
		required: true,
	},
	rent: {
		type: String,
		required: true,
	},
});

const LikeSchema = new mongoose.Schema({
	clientId: {
		type: String,
	},
});

const ListingSchema = new mongoose.Schema({
	landlord: {
		type: Schema.Types.ObjectId,
		ref: "landlords",
	},
	landlordFirstName: {
		type: String,
		required: true,
	},
	landlordLastName: {
		type: String,
		required: true,
	},
	landlordEmail: {
		type: String,
		required: true,
	},
	images: [imageSchema],
	address: {
		type: AddressSchema,
		//required: true,
	},
	location: {
		type: String,
		required: true,
	},
	features: [
		{
			type: String,
		},
	],
	likes: [
		{
			type: String,
		},
	],
	details: {
		type: DetailsSchema,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const ListingModel = mongoose.model("listing", ListingSchema);

module.exports = ListingModel;
