const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const profileRouter = require("./profile");
const productRouter = require("./product");

router.get("/", (req, res) => res.send("masuk router"));

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/products", productRouter);

module.exports = router;
