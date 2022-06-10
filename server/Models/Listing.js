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
  areaType: {
    // 1bhk,2bhk type
    type: String,
    required: true,
  },
});

const ListingSchema = new mongoose.Schema({
  landlord: {
    type: Schema.Types.ObjectId,
    ref: "landlord",
  },
  image: {
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
    required: true,
  },
});

const ListingModel = mongoose.model("listing", ListingSchema);

module.exports = ListingModel;
