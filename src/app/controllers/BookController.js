const mongoose = require("mongoose");
const Book = require("../models/Book");

class BookController {
  async index(req, res) {
    try {
      const books = await Book.find({});

      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async store(req, res) {
    try {
      const { name, author, publishing, user } = req.body;

      const book = await Book.create({
        name,
        author,
        publishing,
        user,
      });

      return res.status(201).json(book);
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

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      const bookUpdate = await Book.updateOne(
        { _id: id },
        {
          $set: { ...data },
        }
      );

      const book = await Book.findById(id);

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado!" });
      }

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findByIdAndDelete(id);

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado!" });
      }

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).Json({ message: "Error Interno do Servidor" });
    }
  }
}

module.exports = new BookController();
