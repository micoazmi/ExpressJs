const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const authentication = require("./middlewares/authentication");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./route");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${JSON.stringify(req.body)}`);
  next();
});
app.listen(port, () => {
  console.log(`example app listen on ${port}`);
});
