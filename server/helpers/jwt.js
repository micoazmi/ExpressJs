const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

const createToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
};

module.exports = { createToken, verifyToken };
