const express = require("express");
const LandlordModel = require("../Models/Landord");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_TOKEN = "pawan";

router.post("/registerLandlord", async (req, res) => {
  try {
    //checking if the email is already in use
    let landlord = await LandlordModel.findOne({ email: req.body.email });
    if (landlord) {
      return res.status(400).json({ error: "Email id already in use" });
    }
    // generating salt for bcryption
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    const address = {
      // creating address object
      city: req.body.address.city,
    };

    landlord = await LandlordModel.create({
      // creating client
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: address,
      password: secPass,
    });
    // creating a authtoken using our client's id
    const data = {
      user: {
        id: landlord.id,
        isLandlord: true,
      },
    };
    //sending authtoken
    const token = jwt.sign(data, JWT_TOKEN);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error occured here");
  }
});

module.exports = router;
