const express = require("express");
const ListingModel = require("../Models/Listing");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const ClientModel = require("../Models/Client");
// add address back again here
router.post("/addListing", fetchUser, async (req, res) => {
  try {
    const checkAccess = req.user.isLandlord;
    if (!checkAccess) {
      console.log("here");
      res.sendStatus(403);
    }
    const { address, images, features, details, location } = req.body;
    const listing = await ListingModel.create({
      landlord: req.user.id,
      images,
      address,
      features,
      details,
      location,
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
    const listings = await ListingModel.find({
      likes: req.user.id,
    });
    res.json(listings);
  } catch (error) {
    res.json("error");
  }
});

router.post("/getSingleListing", async (req, res) => {
  try {
    //console.log(req.body.params);
    const listing = await ListingModel.findOne({ _id: req.body.params.id });
    res.json(listing);
  } catch (error) {
    res.json("error");
  }
});

router.post("/addToLiked", fetchUser, async (req, res) => {
  try {
    //const toInsert = { listing: req.body.id };
    const s = await ListingModel.updateOne(
      { _id: req.body.id },
      { $push: { likes: req.user.id } }
    );
  } catch (error) {
    res.json("error");
  }
});

router.post("/unlike", fetchUser, async (req, res) => {
  try {
    const s = await ListingModel.updateOne(
      { _id: req.body.id },
      { $pull: { likes: req.user.id } }
    );
  } catch (error) {
    res.json("error");
  }
});

module.exports = router;
