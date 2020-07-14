const slowDown = require("express-slow-down");

const speedLimiter = slowDown({
  windowMs: 10 * 60 * 1000,
  delayAfter: 50,
  delayMs: 500,
});

module.exports = speedLimiter;
