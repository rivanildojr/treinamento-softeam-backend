const express = require("express");
const database = require("./src/database/database");
const routes = require("./src/app/routes");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);
