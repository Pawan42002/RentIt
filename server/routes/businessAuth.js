const express = require("express");
const LandlordModel = require("../Models/Landord");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_SECRET = process.env.JWT_SECRET;
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
        isSubscribed: false,
      },
    };
    //sending authtoken
    const token = jwt.sign(data, JWT_SECRET);
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        //secure: process.env.NODE_ENV === "production",
      })
      .json({ email: landlord.email, isLandlord: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error occured here");
  }
});

router.post("/loginLandlord", async (req, res) => {
  try {
    const { email, password } = req.body;
    // finding a user with the given email
    let landlord = await LandlordModel.findOne({ email: req.body.email });
    // if the user with the given email doesnt exist then we will return;
    if (!landlord) {
      return res.status(401).json({ error: "Bad credentials" });
    }
    // checking the password with the password in the database
    const passwordCompare = await bcrypt.compare(
      req.body.password,
      landlord.password
    );
    // if wrong password
    if (!passwordCompare) {
      return res.status(401).json({ errors: "Bad credentials" });
    }
    const data = {
      user: {
        id: landlord._id,
        isLandlord: true,
        isSubscribed: landlord.isSubscribed,
      },
    };
    //sending authtoken
    const token = jwt.sign(data, JWT_SECRET);
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        //secure: process.env.NODE_ENV === "production",
      })
      .json({ email: landlord.email, isLandlord: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occured here" });
  }
});

module.exports = router;
