const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Sem Token!" });
  }

  const [schema, token] = authorization.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, "treinamentoBack");
    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token Invalido!" });
  }
};
