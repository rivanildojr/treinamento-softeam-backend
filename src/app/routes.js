const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/api/v1/users", UserController.index);
routes.post("/api/v1/users", UserController.store);
routes.get("/api/v1/users/:id", UserController.show);
routes.put("/api/v1/users/:id", UserController.update);
routes.delete("/api/v1/users/:id", UserController.delete);

module.exports = routes;
