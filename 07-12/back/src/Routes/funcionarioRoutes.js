const express = require('express');
const router = express.Router();

const Funcionario = require("./../Controller/FuncionarioController");

router.get("/funcionario/read", Funcionario.listarFuncionario);
router.post("/funcionario/create", Funcionario.cadastrarFuncionario);
router.put("/funcionario/update", Funcionario.alterarFuncionario);
router.delete("/funcionario/delete/:id_trata", Funcionario.excluirFuncionario);

module.exports = router;