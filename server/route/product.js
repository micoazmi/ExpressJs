const express = require("express");
const ProductController = require("../controller/ProductController");
const authenticateToken = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authenticateToken, ProductController.getAll);
router.post("/", authenticateToken, ProductController.create);
router.get("/:id", authenticateToken, ProductController.getOne);
router.put("/:id", authenticateToken, ProductController.update);
router.delete("/:id", authenticateToken, ProductController.delete);

module.exports = router;
