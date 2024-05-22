const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authenticateToken = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) return res.status(401).json({ error: "Please login first" });

    const token = bearer.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token not provided" });

    const decodedToken = verifyToken(token);
    if (!decodedToken) return res.status(401).json({ error: "Invalid token" });

    const user = await User.findByPk(decodedToken.id);
    if (!user) return res.status(401).json({ error: "User not found" });
    console.log(user.id, "ini userid");
    req.user = { id: user.id };
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authenticateToken;
