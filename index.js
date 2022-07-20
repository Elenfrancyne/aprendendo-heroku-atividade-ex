const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
app.get("/", function(req, res) {
    res.send("Olá, desenvolvedores sofredores em aprendizagem!!");
});

app.listen(port, () => {
    console.info(`Aplicação rodando em: http://localhost:${port}`)
});