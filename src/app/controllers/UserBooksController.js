const mongoose = require("mongoose");
const User = require("../models/User");
const Book = require("../models/Book");

class UserBooksController {
  async index(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      const userBooks = await Book.aggregate([
        {
          $match: { user: user._id },
        },
        {
          $project: { user: 0 },
        },
        {
          $lookup: {
            from: "user",
            localField: "user",
            foreignField: "_id",
            as: "booksUser",
          },
        },
      ]);

      return res.status(200).json({ user, books: userBooks });
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findById(id);

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado!" });
      }

      await book.populate("user").execPopulate();

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }
}

module.exports = new UserBooksController();
