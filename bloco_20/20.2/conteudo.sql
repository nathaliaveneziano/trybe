-- SELECT , o primeiro passo

SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';

-- Consolidando o conhecimento

-- Monte uma query que exiba seu nome na tela;
SELECT 'Nathália';
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Nathália', 'Veneziano', 'Santos', 34;
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Nathália' AS Nome, 'Veneziano' AS Sobrenome, 'Santos' AS 'Cidade Natal', 34 AS Idade;
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';

USE sakila;
-- Escreva uma query que selecione todas as colunas da tabela city ;
SELECT * FROM city;
-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
SELECT first_name, last_name FROM customer;
-- Escreva uma query que exiba todas as colunas da tabela rental ;
SELECT * FROM rental;
-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
SELECT title, description, release_year FROM film;

-- Juntando duas ou mais colunas usando o CONCAT

SELECT CONCAT (first_name, last_name) FROM sakila.actor;
-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
-- Muito melhor, certo? Mas dá para melhorar? Dá!
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

-- Consolidando o conhecimento

-- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
SELECT CONCAT(title, ' - ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
-- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT CONCAT(title, ' - ', rating) AS Classificação FROM sakila.film;
-- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .
SELECT CONCAT(address, ' - ', district) AS Endereço FROM sakila.address;

-- Dados repetidos? Aqui Não! Como usar o DISTINCT

CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

-- Consolidando o conhecimento

-- Monte uma query para encontrar pares únicos de nomes e idades .
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior? 5
-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior? 4
-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade From Escola.Alunos;
-- Quantas linhas você encontraria na query anterior? 4

-- Contando resultados com o COUNT

-- Consolidando o conhecimento

SELECT * FROM staff;
-- Quantas senhas temos cadastradas nessa tabela? 1
SELECT COUNT(*) FROM sakila.staff WHERE password != '';
-- Quantas pessoas temos no total trabalhando para nossa empresa? 2
SELECT COUNT(*) FROM sakila.staff WHERE staff_id != '';
-- Quantos emails temos cadastrados nessa tabela? 2
SELECT COUNT(*) FROM sakila.staff WHERE email != '';

-- Gerando ID único
SELECT UUID();
-- Detalhando informações de tabela
SHOW columns FROM sakila.actor;

-- Pesquisas gigantes? LIMIT isso ae!

SELECT COUNT(*) FROM sakila.rental;
# Query + LIMIT quantidade_de_resultados
SELECT * FROM sakila.rental LIMIT 10;

-- LIMIT OFFSET - Pulando linhas desnecessárias

# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

-- Vamos montar o bolo com todos os ingredientes que vimos hoje

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;
-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM sakila.film;
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados na tabela actor.
SELECT DISTINCT last_name FROM sakila.actor;

-- Crie queries para descobrir o seguinte:
-- Quantos filmes temos cadastrados?
SELECT COUNT(title) FROM sakila.film;
-- Quantos clientes temos registrados?
SELECT COUNT(first_name) from sakila.customer;
-- Quantos sobrenomes únicos temos na tabela actor ?
SELECT COUNT(DISTINCT last_name) from sakila.actor;
-- Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(name) FROM sakila.category;
-- Quantos países são atendidos pela sakila?
SELECT COUNT(country) FROM sakila.country;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
SELECT name FROM sakila.language LIMIT 5 OFFSET 1;
-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost LIMIT 20;
