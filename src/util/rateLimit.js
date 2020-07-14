const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Usuario efetuando muitas requisições",
});

module.exports = limiter;
