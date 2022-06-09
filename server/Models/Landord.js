const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
});

const DocumentSchema = new mongoose.Schema({
  documentName: {
    type: String,
    require: true,
  },
  documentID: {
    type: String,
    require: true,
  },
});

const LandlordSchema = new mongoose.Schema({
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
  verification: [DocumentSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

const LandlordModel = mongoose.model("landlord", LandlordSchema);

module.exports = LandlordModel;
