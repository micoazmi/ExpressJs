const { comparePassword, hashPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = class AuthController {
  static register = async (req, res) => {
    try {
      let { email, password } = req.body;
      const hashedPassword = hashPassword(password);
      const data = await User.create({ email, password: hashedPassword });
      res
        .status(201)
        .json({ message: `id ${data.id} successfully registered` });
    } catch (error) {
      console.log(error, "error register");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static login = async (req, res) => {
    try {
      let { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "email/password is required" });
      const findUser = await User.findOne({ where: { email } });
      if (!findUser)
        return res.status(400).json({ message: "invalid email/password" });
      const checkPassword = comparePassword(password, findUser.password);
      if (!checkPassword)
        return res.status(400).json({ message: "invalid password" });
      const accessToken = createToken({ id: findUser.id });
      res.status(200).json({ accessToken });
    } catch (error) {
      console.log(error, "error login");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
};
