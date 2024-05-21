const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) return res.status(401).json("please login first");
    const token = bearer.split(" ")[1];
    const decodedToken = verifyToken(token);
    const user = await User.findByPk(decodedToken.id);
    if (!user) return res.status(401).json("user not found");
    req.user = { id: user.id };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authentication;
