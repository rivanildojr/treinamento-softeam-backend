const express = require("express");
const database = require("./database/database");
const routes = require("./app/routes");
const { errors } = require("celebrate");
const cors = require("cors");
const helmet = require("helmet");
const limiter = require("./util/rateLimit");
const slowDown = require("./util/slowDown");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(limiter);
app.use(slowDown);
app.use(routes);
app.use(errors());

module.exports = app;
