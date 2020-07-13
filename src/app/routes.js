const express = require("express");
const routes = express.Router();
const auth = require("./Middlewares/auth");
const { celebrate, Joi, Segments } = require("celebrate");

const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");
const AuthController = require("./controllers/AuthController");
const UserBooksController = require("./controllers/UserBooksController");

routes.post("/api/v1/login", AuthController.store);

routes.get("/api/v1/users", UserController.index);
routes.post(
  "/api/v1/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  UserController.store
);
routes.get(
  "/api/v1/users/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  UserController.show
);
routes.put("/api/v1/users/:id", UserController.update);
routes.delete("/api/v1/users/:id", UserController.delete);

routes.get("/api/v1/books", BookController.index);
routes.post("/api/v1/books", BookController.store);
routes.get("/api/v1/books/:id", BookController.show);
routes.put("/api/v1/books/:id", BookController.update);
routes.delete("/api/v1/books/:id", BookController.delete);

routes.get(
  "/api/v1/user/:id/books",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  auth,
  UserBooksController.index
);
routes.get(
  "/api/v1/book/:id/users",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  auth,
  UserBooksController.show
);

module.exports = routes;
