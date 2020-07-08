const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");

routes.get("/api/v1/users", UserController.index);
routes.post("/api/v1/users", UserController.store);
routes.get("/api/v1/users/:id", UserController.show);
routes.put("/api/v1/users/:id", UserController.update);
routes.delete("/api/v1/users/:id", UserController.delete);

routes.get("/api/v1/books", BookController.index);
routes.post("/api/v1/books", BookController.store);
routes.get("/api/v1/books/:id", BookController.show);
routes.put("/api/v1/books/:id", BookController.update);
routes.delete("/api/v1/books/:id", BookController.delete);

module.exports = routes;
