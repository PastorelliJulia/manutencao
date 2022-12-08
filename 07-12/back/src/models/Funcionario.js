const toCreate = (model) => {
    return `INSERT INTO funcionarios VALUES (default,'${model.nome}','${model.especialidade}')`;
}

const toRead = (model) => {
    return 'SELECT * FROM funcionarios';
}

const toUpdate = (model) => {
    return `UPDATE funcionarios SET 
    funcionario = '${model.funcionario}', 
    nome = ${model.nome} 
    WHERE id_funcionario = '${model.id_funcionario}'`;
}

const toDelete = (model) => {
    return `DELETE FROM funcionarios WHERE id_funcionario = '${model.id_funcionario}'`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}