const mongoose = require("mongoose");
const Book = require("../models/Book");

class BookController {
  async index(req, res) {
    try {
      const books = await Book.find({});

      return res.status(200).json(books);
    } catch (error) {
      console.log({ error });
    }
  }

  async store(req, res) {
    try {
      const { name, author, publishing } = req.body;

      const book = await Book.create({
        name,
        author,
        publishing,
      });

      return res.status(201).json(book);
    } catch (error) {
      console.log({ error });
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
      console.log({ error });
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
      console.log({ error });
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
      console.log({ error });
    }
  }
}

module.exports = new BookController();
