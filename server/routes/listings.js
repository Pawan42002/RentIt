const express = require("express");
const ListingModel = require("../Models/Listing");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_TOKEN = "pawan";

router.post("/addListing", fetchUser, async (req, res) => {
  try {
    const checkAccess = req.user.isLandlord;
    if (!checkAccess) {
      res.status(401).send("Unauthorized");
    }
    const { address, images, features, details } = req.body;
    let listing = await ListingModel.create({
      images,
      landlord: req.user.id,
      address,
      features,
      details,
    });
    res.send(listing);
  } catch (err) {
    res.status(500).send("Error occured!");
  }
});

module.exports = router;
