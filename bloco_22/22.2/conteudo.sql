-- Exercícios de fixação - normalização de dados

-- Exercício 1: Normalize a tabela a seguir para a 1ª Forma Normal.
-- Colunas com nomes duplicados (Contato) que deveria ser E-mail e Telefone
-- DataCadastro com tipos de informações diferentes
-- Setor com mais de 1 informação

-- Exercício 2: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, 
-- transforme-a agora na 2ª Forma Normal.
-- Transformar em 3 tabelas: Funcionario, Setor, Funcionario_Setor
-- Funcionario: Funcionario_id, Nome, Sobrenome, Email, Telefone, DataCadastro
-- Setor: Setor_id, Setor
-- Funcionario_Setor: Empregado_id, Funcionario_id, Setor_id

-- Exerício 3: Monte uma query que:
	-- Crie um banco de dados chamado normalization ;
	-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
	-- Popule todas as tabelas com os dados fornecidos nos exercícios.

CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;
CREATE TABLE IF NOT EXISTS Funcionarios (
	Funcionario_id INT(11) NOT NULL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Sobrenome VARCHAR(100) NOT NULL, 
    Email VARCHAR(200) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    DataCadastro DATETIME NOT NULL
);
INSERT INTO normalization.Funcionarios(Funcionario_id, Nome, Sobrenome, Email, Telefone, DataCadastro) VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996','2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669','2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556','2020-05-05 11:45:40');
SELECT * FROM normalization.Funcionarios;

USE normalization;
CREATE TABLE IF NOT EXISTS Setores (
	Setor_id INT(11) NOT NULL PRIMARY KEY,
    Setor VARCHAR(200) NOT NULL
);
INSERT INTO normalization.Setores(Setor_id, Setor) VALUES
(1, 'Administração'),
(2, 'Vendas'),
(3, 'Operacional'),
(4, 'Estratégico'),
(5, 'Marketing');
SELECT * FROM normalization.Setores;

USE normalization;
CREATE TABLE IF NOT EXISTS Funcionarios_Setores (
    Funcionario_id INTEGER,
    Setor_id INTEGER,
    CONSTRAINT PRIMARY KEY(Funcionario_id, Setor_id),
    FOREIGN KEY (Funcionario_id) REFERENCES Funcionarios (Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES Setores (Setor_id)
);
INSERT INTO normalization.Funcionarios_Setores(Funcionario_id, Setor_id) VALUES
(12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 2),
(15, 5);
SELECT * FROM normalization.Funcionarios_Setores;

-- Como criar e restaurar um dump de um banco de dados através da linha de comando

-- Listar todos os bancos de dados
SHOW DATABASES;

-- Selecionando o banco
USE banco_desejado;

-- Exibindo tabelas do banco selecionado
SHOW TABLES;

-- Criando backup (dump) de tabelas de um banco no geral (via terminal)
-- Dentro da pasta onde deseja criar o dump, inserimos:
-- mysqldump -u usuario_mysql -p nome_banco > nome_arquivo.sql

-- Criando backup (dump) de tabelas de uma estrutura de um banco (via terminal)
-- Dentro da pasta onde deseja criar o dump, inserimos:
-- mysqldump -u usuario_mysql -p --no-data nome_banco > nome_arquivo.sql

-- Recuperar tabelas de um backup (dump) de um banco???
-- Após a criação do banco via terminal/CLI, e dentro da pasta onde foi criado o dump, inserimos:
-- mysqldump -u usuario_mysql -p nome_banco < nome_arquivo.sql 


