const { User } = require("../models");

class ProfileController {
  static getProfile = async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: ["id", "name", "email", "gender"],
      });
      if (!user) return res.status(404).json({ error: "User not found!" });
      res.json(user);
    } catch (error) {
      console.log(error, "error getProfile");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = ProfileController;
