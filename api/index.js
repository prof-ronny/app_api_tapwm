const server = require('express')
const app = server();
const cors = require('cors');

const bodyParser = require('body-parser');
const config= require('config');
app.use(cors());
app.use(bodyParser.json())

const roteador = require("../rotas/rotaproduto.js");
app.use("/api/produtos",roteador);

app.listen(80,()=>{"Olá mundo"})
