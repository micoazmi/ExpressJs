const bcrypt = require("bcryptjs");

const hashPassword = (passwordAsli) => bcrypt.hashSync(passwordAsli, 8);
const comparePassword = (passwordAsli, hashedPassword) =>
  bcrypt.compareSync(passwordAsli, hashedPassword);

module.exports = { hashPassword, comparePassword };
