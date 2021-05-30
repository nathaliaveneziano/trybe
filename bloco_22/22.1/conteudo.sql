-- Database Design - Como modelar um banco de dados

-- Criando um banco de dados para conter suas tabelas

/*
- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

- Verifica se o banco de dados ainda não existe.
- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

- Lista todos os bancos de dados existentes.
SHOW DATABASES;

- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
*/

CREATE DATABASE IF NOT EXISTS albuns;

-- Como utilizar um banco de dados

SELECT * FROM sakila.actor;

USE sakila;
SELECT * FROM actor;

-- Criando Tabela

-- CREATE TABLE nome_tabela (
-- 	coluna1 tipo_dado constraint,
-- 	coluna2 tipo_dado constraint,
-- 	coluna3 tipo_dado constraint,
-- ) ENGINE='nome_engine' // InnoDB = mais utilizado;

-- Chave primária simples

DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
	cidade VARCHAR(100) NOT NULL,
	estado VARCHAR(10) NOT NULL,
	populacao INTEGER,
	CONSTRAINT PRIMARY KEY(cidade)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
	  ('Rio Claro','RJ',17216);
-- No exemplo acima teremos um **erro**, pois há uma violação da chave primária, 
-- já que o nome "Rio Claro" será **duplicado** e isto não é permitido.

-- Chave primária composta

DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
	cidade VARCHAR(100) NOT NULL,
	estado VARCHAR(10) NOT NULL,
	populacao INTEGER,
	CONSTRAINT PRIMARY KEY(cidade, estado)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
	  ('Rio Claro','RJ',17216);

-- Mesmo código mas com chave primária simples

 DROP TABLE cidades; -- Apagar a versão antiga da tabela
 CREATE TABLE cidades(
   id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   cidade VARCHAR(100) NOT NULL,
   estado VARCHAR(10) NOT NULL,
   populacao INTEGER
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
	  ('Rio Claro','RJ',17216);

-- Chave primária e extrangeira
      
CREATE TABLE filme_ator(
	AtorId INTEGER,
	FilmeId INTEGER,
	CONSTRAINT PRIMARY KEY(AtorId, FilmeId),
	FOREIGN KEY (AtorId) REFERENCES Actor (Atorid),
	FOREIGN KEY (Filme) REFERENCES Actor (Filmeid)
);