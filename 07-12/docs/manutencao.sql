drop database if exists manutencao;
create database manutencao charset=UTF8 collate utf8_general_ci;
use manutencao;

CREATE TABLE funcionarios (
    id_funcionario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especialidade VARCHAR(50) NOT NULL
);

CREATE TABLE ordemServico (
    id_ordemServico INTEGER PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,
    custo VARCHAR(100) NOT NULL,
    id_funcionario INTEGER NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario)
);

show tables;

DESCRIBE funcionarios;
DESCRIBE ordemservico;

INSERT INTO funcionarios VALUES (Default, "Ana", "Encanador/a");
INSERT INTO funcionarios VALUES (Default, "Juliana", "Pedreiro/a");
INSERT INTO funcionarios VALUES (Default, "Fabiana", "Pintor/a");
INSERT INTO funcionarios VALUES (Default, "Ivana", "Eletricista");

INSERT INTO ordemServico VALUES (Default, "Concertar chuveiro", "50", 1);
INSERT INTO ordemServico VALUES (Default, "Torneira pingando", "50", 2);
INSERT INTO ordemServico VALUES (Default, "Vazamento no banheiro", "300", 3);
INSERT INTO ordemServico VALUES (Default, "Tocar porta cozinha", "50", 4);
INSERT INTO ordemServico VALUES (Default, "Instalar piso do banheiro", "600", 3);
INSERT INTO ordemServico VALUES (Default, "Pintar um quarto", "200", 4);
INSERT INTO ordemServico VALUES (Default, "Trocar resistencia chuveiro", "50", 4);