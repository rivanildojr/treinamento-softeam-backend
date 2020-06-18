const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/api/v1/users", UserController.index);

module.exports = routes;
