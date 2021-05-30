-- Tabela vazia ? Vamos resolver isso ae! INSERT na prática

/*
-- Inserindo uma linha de uma vez
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

-- Inserindo várias linhas de uma vez
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
*/
-- Ignorando linhas existentes

INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

-- Inserindo valores em colunas com auto_increment

INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
SELECT * FROM sakila.actor;

-- INSERT SELECT (Inserindo dados de uma outra tabela)

/*
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
*/

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.actor;

-- Consolidando o conhecimento

-- Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e 
-- selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te 
-- guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos 
-- manualmente. Boa explorada!
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, `active`, username) VALUES 
('Nathália', 'Veneziano', 10, 2, 1, 'nathveneziano');
SELECT * FROM sakila.staff;

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma 
-- query.
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, `active`, username) VALUES 
('Claudia', 'Veneziano', 5, 1, 0, 'dinhaveneza'), 
('Marcelo', 'Sousa', 3, 2, 0, 'marcelococao');
SELECT * FROM sakila.staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas 
-- como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;
SELECT * FROM sakila.actor;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (`name`) VALUES
('APP'),
('Books'),
('Streaming');
SELECT * FROM sakila.category;

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(3, 3);
SELECT * FROM sakila.store;


-- Digitou algo errado? De boa, vamos dar um UPDATE

/*
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
*/

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
('Ravein', 'Bezos', 3, 1, 'rabezos');
SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';
SELECT * FROM sakila.staff;

-- Alterando mais de uma coluna ao mesmo tempo

UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 6;
SELECT * FROM sakila.staff;

-- UPDATE em massa

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- Fazendo um UPDATE de forma sequencial

/*
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];
*/

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- Um pouco mais sobre o modo --safe-updates

SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
-- sql_select_limit =1000 limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução 
-- inclua LIMIT .

-- max_join_size =1.000.000 faz com que as instruções SELECT de várias tabelas produzam um erro se o 
-- servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

-- Desativando safe updates mode

SET SQL_SAFE_UPDATES = 0;

-- Consolidando o conhecimento

/*
1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome 
"JULIA" para "JULES".
*/
SELECT * FROM sakila.actor WHERE first_name = 'JULIA';
UPDATE sakila.actor 
SET first_name = 'JULES' 
WHERE first_name = 'JULIA';
SELECT * FROM sakila.actor WHERE first_name = 'JULES';

/*
2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
*/
SELECT * FROM sakila.category WHERE `name` = 'Sci-Fi';
UPDATE sakila.category 
SET `name` = 'Science Fiction' 
WHERE `name` = 'Sci-Fi';
SELECT * FROM sakila.category WHERE `name` = 'Science Fiction';

/*
3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que 
possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
*/
SELECT * FROM sakila.film WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;
UPDATE sakila.film 
SET rental_rate = 25 
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;
SELECT * FROM sakila.film WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

/*
4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base 
em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, 
e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
*/
SELECT * FROM sakila.film;
UPDATE sakila.film 
SET rental_rate = (
CASE true WHEN (length <= 100) THEN 10
ELSE 20
END);
SELECT * FROM sakila.film;


-- Como assim, alguém te cadastrou sem você deixar ? Vamos dar um DELETE nisso!

-- Excluindo dados de uma tabela

/*
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
*/

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';
SELECT * FROM sakila.film_text;

-- Meu DELETE não foi permitido...

/*
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;
*/

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
/* 
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
(`sakila`.`film_actor`, CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` 
(`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE)
*/

DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

-- DELETE VS TRUNCATE

-- Limpar (excluir todos os registros) de uma tabela
-- TRUNCATE banco_de_dados.tabela;

-- Consolidando o conhecimento

/*
1. Exclua do banco de dados o ator com o nome de "KARL".
*/
SELECT * FROM sakila.actor WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';

/*
2. Exclua do banco de dados os atores com o nome de "MATTHEW".
*/
SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

/*
3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
*/
SELECT * FROM sakila.film_text WHERE `description` LIKE '%saga%';
DELETE FROM sakila.film_text WHERE `description` LIKE '%saga%';

/*
4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e 
film_category.
*/
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

/*
5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram 
impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
*/
-- address, city, customer, film, film_actor, film_category, inventory, payment,rental, 
-- staff, store = ON DELETE RESTRICT
-- payment = ON DELETE SET NULL

/*
6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
*/
DROP DATABASE sakila;
