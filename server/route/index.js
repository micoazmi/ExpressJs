const express = require("express");
const router = express.Router();
const authRouter = require("./auth");

router.get("/", (req, res) => res.send("masuk router"));

router.use(authRouter);

module.exports = router;
