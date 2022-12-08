const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const funcionarioR = require('./src/routes/funcionarioRoutes.js');
const ordem_servicoR = require('./src/routes/ordemServicoRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(funcionarioR);
app.use(ordem_servicoR);

app.listen(3000, () => {
    console.log("respondendo na porta 3000");
});