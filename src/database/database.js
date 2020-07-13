const mongoose = require("mongoose");

const URL_BD = process.env.URL_BD;
const PORT_BD = process.env.PORT_BD;

const uri = `mongodb://${URL_BD}:${PORT_BD}/treinamento`;

const connection = mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = connection;
