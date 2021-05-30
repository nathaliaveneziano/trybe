-- Clonar tabelas existentes
-- * Esse comando não copia os dados, apenas a estrutura;
-- * Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver 
-- ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.

-- Sintaxe:
-- USE nome_do_banco_de_dados;
-- CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exemplo:
CREATE TABLE actor_clone LIKE sakila.actor;


-- O que é e como lidar com uma VIEW
-- * Ter uma tabela que pode ser usada em relatórios;
-- * Ter uma tabela para usar como base para montar novas queries;
-- * Reduzir a necessidade de recriar queries utilizadas com frequência.

-- Sintaxe:
-- USE nome_do_banco_de_dados;
-- CREATE VIEW nome_da_view AS query;

-- Exemplo:
CREATE VIEW top_10_customers AS
SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
FROM sakila.payment p
INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
GROUP BY customer_id
ORDER BY total_amount_spent DESC
LIMIT 10;
SELECT * FROM top_10_customers;

-- Excluir uma VIEW
-- DROP VIEW nome_da_view;


-- Tudo que você deve saber sobre o ALTER TABLE

USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

-- Estrutura da tabela
-- SHOW COLUMNS FROM nome_da_tabela;
SHOW COLUMNS FROM sakila.noticia;


-- DROPando uma tabela

-- Excluir uma tabela existente que não é referenciada por uma restrição de chave estrangeira.
-- DROP TABLE nome_da_tabela;


-- Como usar um INDEX


-- Criando um índice em uma coluna
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
-- ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
-- ON tabela (coluna1, coluna2);

-- Excluindo índices
-- DROP INDEX nome_do_indice ON tabela;

-- Entenda o impacto do INDEX

CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Entenda o impacto do FULLTEXT INDEX

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- Entenda o impacto do UNIQUE INDEX

-- CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);
-- DROP INDEX nome_do_indice ON nome_tabela;

SHOW INDEX FROM sakila.actor;

-- Um exemplo de uso do UNIQUE INDEX

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';