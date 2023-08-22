const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('puerto',process.env.PORT || 3001);

//rutas
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.listen(app.get('puerto'), ()=> console.log(`Servidor corriendo de manera correcta${app.get('puerto')}`));