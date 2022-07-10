const express = require("express");
const ListingModel = require("../Models/Listing");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_TOKEN = "pawan";
const ClientModel = require("../Models/Client");
// add address back again here
router.post("/addListing", fetchUser, async (req, res) => {
  try {
    const checkAccess = req.user.isLandlord;
    if (!checkAccess) {
      res.sendStatus(403);
    }
    const { address, images, features, details } = req.body;
    const listing = await ListingModel.create({
      landlord: req.user.id,
      images,
      address,
      features,
      details,
    });
    res.send(listing);
  } catch (err) {
    res.sendStatus(403);
  }
});

router.get("/getListings", fetchUser, async (req, res) => {
  try {
    const myListings = await ListingModel.find({ landlord: req.user.id });
    res.send(myListings);
  } catch (error) {
    res.json("Error");
  }
});

router.get("/allListings", async (req, res) => {
  try {
    const listings = await ListingModel.find({});
    res.send(listings);
  } catch (error) {
    res.json("error");
  }
});

router.get("/getAllLiked", fetchUser, async (req, res) => {
  try {
    const user = await ClientModel.findOne({ _id: req.user.id });
    res.json(user);
  } catch (error) {
    res.json("error");
  }
});

router.get("/getSingleListing", async (req, res) => {
  try {
    const listing = await ListingModel.findOne({ _id: req.body.id });
    res.json(listing);
  } catch (error) {
    res.json("error");
  }
});

router.post("/addToLiked", fetchUser, async (req, res) => {
  try {
    const toInsert = { listing: req.body.id };
    await ClientModel.findOneAndUpdate(
      { _id: req.user.id },
      { $push: { favourites: toInsert } }
    );
  } catch (error) {
    res.json("error");
  }
});

module.exports = router;
