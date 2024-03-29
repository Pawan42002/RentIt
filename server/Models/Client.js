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
  date: {
    type: Date,
    default: Date.now,
  },
});

const ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;
