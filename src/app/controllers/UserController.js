const mongoose = require("mongoose");
const User = require("../models/User");

// localhost:3333/api/v1/users - GET - Todos os usuarios - index
// localhost:3333/api/v1/users - POST - Criar os usuarios - store
// localhost:3333/api/v1/users/:id - PUT - Atualizar os usuarios - update
// localhost:3333/api/v1/users/:id - DELETE - Deletar os usuarios - delete
// localhost:3333/api/v1/users/:id - GET - Retornar um usuarios - show

class UserController {
  async index(req, res) {
    try {
      const users = await User.find({});

      return res.status(200).json(users);
    } catch (error) {
      console.log({ error });
    }
  }
}

module.exports = new UserController();
