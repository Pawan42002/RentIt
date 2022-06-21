var jwt = require("jsonwebtoken");
const JWT_SECRET = "pawan";

const fetchUser = async (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.cookies.access_token;
  if (!token) {
    //res.status(401).send({ error: "Please authenticate using a valid token" });
    res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = fetchUser;
