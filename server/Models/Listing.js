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
    ref: "landlords",
  },
  images: {
    type: [String],
    required: true,
  },
  address: {
    type: AddressSchema,
    //required: true,
  },
  features: [
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
