const mongoose = require("mongoose");
const User = require("../models/User");
const Book = require("../models/Book");

class UserController {
  async index(req, res) {
    try {
      const users = await User.find({});

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const emailExists = await User.findOne({ email });

      if (emailExists) {
        return res.status(409).json({ message: "Email já existente!" });
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      user.password = undefined;

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado!" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      const userUpdate = await User.updateOne(
        { _id: id },
        {
          $set: { ...data },
        }
      );

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }
}

module.exports = new UserController();
