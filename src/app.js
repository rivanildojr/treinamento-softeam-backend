const express = require("express");
const database = require("./database/database");
const routes = require("./app/routes");
const { errors } = require("celebrate");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;
