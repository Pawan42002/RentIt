const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema({
  address: {
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

const ListingSchema = new mongoose.Schema({
  landlord: {
    type: Schema.Types.ObjectId,
    ref: "landlord",
  },
  images: {
    type: [String],
    required: true,
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  features: [featureSchema],
  details: {
    type: DetailsSchema,
    //required: true,
  },
});

const ListingModel = mongoose.model("listing", ListingSchema);

module.exports = ListingModel;
