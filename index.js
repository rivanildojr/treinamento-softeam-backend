const express = require("express");

const app = express();

app.use(express.json());

//Endpoint
//Rotas
// localhost:3333/api/v1/
// localhost:3333/api/v1

//Recurso
// localhost:3333/api/v1/user

// Verbos HTTP
// GET
// POST
// PUT
// PATCH
// DELETE

// Parametros da Requisição

// Resquest Param
// Resquest Body
// Resquest Query

app.get("/api/v1/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(3333);
