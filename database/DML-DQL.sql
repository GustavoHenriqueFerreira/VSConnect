USE dbvsconnect;

#TECHS
INSERT INTO tbtechs
VALUES (UUID_TO_BIN(UUID()), "React"), (UUID_TO_BIN(UUID()), "HTML"), (UUID_TO_BIN(UUID()), "Java");

SELECT BIN_TO_UUID(id_tech), nome FROM tbtechs;

#USUARIOS
INSERT INTO tbusuarios
VALUES (UUID_TO_BIN(UUID()), "Odirlei", "odirlei@gmail.com", "senai", "Rua Niteroi", "12345-678", 0), (UUID_TO_BIN(UUID()), "Alexia", "alexia@gmail.com", "senai", "Rua Niteroi", "12345-678", 0), (UUID_TO_BIN(UUID()), "Thiago", "thiago@gmail.com", "senai", "Rua Niteroi", "12345-678", 0);

DELETE FROM tbusuarios WHERE id_usuario = UUID_TO_BIN("8c8d5817-6edc-11ee-b760-b445067b85b0");

UPDATE tbusuarios SET tipo_usuario = 1 WHERE id_usuario = UUID_TO_BIN("57d8bcbe-6edd-11ee-b760-b445067b85b0");

SELECT BIN_TO_UUID(id_tech), nome FROM tbtechs;
SELECT BIN_TO_UUID(id_usuario), nome, email, senha, endereco, cep, tipo_usuario FROM tbusuarios;

#TABELA INTERMEDIARIA DEV/TECH
INSERT INTO tbdevtech
VALUES (UUID_TO_BIN("1fd09926-6ede-11ee-b760-b445067b85b0"), UUID_TO_BIN("8c8be5b5-6edc-11ee-b760-b445067b85b0")), (UUID_TO_BIN("57d8bcbe-6edd-11ee-b760-b445067b85b0"), UUID_TO_BIN("8c8b96e6-6edc-11ee-b760-b445067b85b0"));

SELECT BIN_TO_UUID(id_dev), BIN_TO_UUID(id_tech) FROM tbdevtech;

#SERVIÇOS
select * from tbservicos;
INSERT INTO tbservicos VALUES
    (UUID_TO_BIN(UUID()), "Dashboard", "Desenvolver uma dashboard com informações importantes do nosso controle de vendas.", "3000", "Concluído", UUID_TO_BIN("1fd09926-6ede-11ee-b760-b445067b85b0")),
    (UUID_TO_BIN(UUID()), "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech", "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.", "1300", "Em andamento", UUID_TO_BIN("1fd09926-6ede-11ee-b760-b445067b85b0")),
    (UUID_TO_BIN(UUID()), "Preciso da estrutura de uma HomePage", "Preciso fazer uma tela somente estruturada em HTML para minha empresa.", "1000", "Pendente", UUID_TO_BIN("1fd09926-6ede-11ee-b760-b445067b85b0"));