CREATE DATABASE dbvsconnect;

USE dbvsconnect;

CREATE TABLE tbtechs(
	id_tech BINARY(16) NOT NULL,
    nome VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id_tech)
);

CREATE TABLE tbusuarios(
	id_usuario BINARY(16) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    endereco VARCHAR(255),
    cep VARCHAR(9) NOT NULL,
    tipo_usuario TINYINT NOT NULL,
    PRIMARY KEY(id_usuario)
);

CREATE TABLE tbdevtech(
	id_dev BINARY(16) NOT NULL,
    id_tech BINARY(16) NOT NULL,
	FOREIGN KEY(id_tech) REFERENCES tbtechs(id_tech),
    FOREIGN KEY(id_dev) REFERENCES tbusuarios(id_usuario)
);

CREATE TABLE tbservicos(
	id_servico BINARY(16) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
	proposta DECIMAL(10, 2) NOT NULL,
    status_servico VARCHAR(50) NOT NULL,
    id_cliente BINARY(16) NOT NULL,
    id_dev BINARY(16),
    PRIMARY KEY(id_servico),
    FOREIGN KEY(id_cliente) REFERENCES tbusuarios(id_usuario),
    FOREIGN KEY(id_dev) REFERENCES tBusuarios(id_usuario)
);

CREATE TABLE tbcotacao(
	id_cotacao BINARY(16) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
	id_dev BINARY(16) NOT NULL,
    id_servico BINARY(16) NOT NULL,
    PRIMARY KEY(id_cotacao),
    FOREIGN KEY(id_dev) REFERENCES tBusuarios(id_usuario),
    FOREIGN KEY(id_servico) REFERENCES tbservicos(id_servico)
);

CREATE TABLE tbtechservico(
	id_tech BINARY(16) NOT NULL,
    id_servico BINARY(16) NOT NULL,
    FOREIGN KEY(id_tech) REFERENCES tbtechs(id_tech),
    FOREIGN KEY(id_servico) REFERENCES tbservicos(id_servico)
);