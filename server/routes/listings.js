const express = require("express");
const ListingModel = require("../Models/Listing");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_TOKEN = "pawan";
// add address back again here
router.post("/addListing", fetchUser, async (req, res) => {
  try {
    const checkAccess = req.user.isLandlord;
    if (!checkAccess) {
      res.status(401).send("Unauthorized");
    }

    const { address, images, features, details } = req.body;
    console.log(images);
    console.log(features);
    console.log(details);
    console.log(address);
    const listing = await ListingModel.create({
      landlord: req.user.id,
      images,
      address,
      features,
      details,
    });
    res.send(listing);
  } catch (err) {
    res.status(500).send("Error occured! here");
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

module.exports = router;
