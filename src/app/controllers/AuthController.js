const mongoose = require("mongoose");
const User = require("../models/User");
const auth = require("../Middlewares/auth");

class AuthController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Usuário não Encontrado" });
      }

      if (!(await user.comparePassword(password))) {
        return res.status(400).json({ message: "Senha invalida" });
      }

      return res.status(200).json({
        user,
        token: user.createToken(),
      });
    } catch (error) {
      console.log({ error });
    }
  }
}

module.exports = new AuthController();
