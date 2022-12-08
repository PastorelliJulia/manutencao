const express = require('express');
const router = express.Router();

const ordemServico = require("./../Controller/ordemServicoController");

router.get("/ordemServico/read", ordemServico.listarOrdemServico);

module.exports = router;