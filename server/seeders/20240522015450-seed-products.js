"use strict";
const fs = require("fs");
const path = require("path");
const products = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data/products.json"), "utf-8")
);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
