const con = require('../dao/manutencaoDAO.js');
const ordemServico = require('../models/ordemServico');

const listarOrdemServico = (req, res) => {
    con.query(ordemServico.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarOrdemServico
}