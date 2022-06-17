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

    const { images, features, details } = req.body;
    console.log(images);
    console.log(features);
    console.log(details);
    const listing = await ListingModel.create({
      landlord: req.user.id,
      images,
      features,
      details,
    });
    console.log(listing);
    console.log("till");
    res.send(listing);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occured! here");
    console.log("here");
  }
});

module.exports = router;
