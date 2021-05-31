-- Montando blocos de código SQL reutilizáveis com stored procedures e stored functions


-- Dica sobre como nomear suas procedures e functions
/*
-- Verbo + Resultado

ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto
*/


-- Estrutura padrão de uma stored procedure
/*
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
*/


-- Criando Variáveis
/*
No MySQL existem três principais tipos de variáveis, sendo elas:
	User-defined variables;
	Local Variables;
	Server System Variables.
    3 - Tipos de dados

A forma mais comum é por meio da User-defined variables que para criar variáveis e atribuir valores a 
elas, você pode fazer da seguinte maneira:
*/
SET @my_school = 'BeTrybe';
SELECT @my_school;


-- Tipos de dados
/*
Tipos de String
	VARCHAR : Uma string não binária de comprimento variável;
	CHAR : Uma string não binária (caractere) de comprimento fixo;
	TEXT : Uma pequena string não binária.

Tipos Numéricos
	TYNINT : Um número inteiro muito pequeno;
	INT : Um inteiro padrão;
	BIGINT : Um grande número inteiro;
	DECIMAL : Um número de ponto fixo.
*/


-- Tipos de stored procedure
/*
Procedure sem parâmetros;
Procedure com parâmetros de entrada (IN) ;
Procedure com parâmetros de saída (OUT) ;
Procedure com parâmetros de entrada e saída (IN-OUT) .
*/


-- Procedure sem parâmetros:
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAllActors();


-- Procedure com parâmetros de entrada (IN):
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:
CALL ShowActorsWithSyllable('lope');


-- Procedure com parâmetros de saida (OUT):
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;


-- Procedure com parâmetros de entrada-saida (IN-OUT):
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:
SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;


-- Consolidando o conhecimento

/*
Exercício 1: Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de 
filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o 
id do ator ou atriz e a quantidade de filmes em que atuaram.
*/
USE sakila;
DELIMITER $$

CREATE PROCEDURE Top10AtoresMaisPopulares()
BEGIN
	SELECT 
	actor_id, 
	COUNT(actor_id) AS quantity 
	FROM sakila.film_actor 
	GROUP BY actor_id 
	ORDER BY quantity DESC 
	LIMIT 10;
END $$

DELIMITER ;

CALL Top10AtoresMaisPopulares();

/*
Exercício 2: Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em 
uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria 
selecionada. Use as tabelas film , film_category e category para montar essa procedure.
*/
USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibirFilmesDaCategoriaSelecionada (IN selected_category VARCHAR(50))
BEGIN
	SELECT 
	fc.film_id, 
	f.title, 
	fc.category_id, 
	c.`name` 
	FROM sakila.film_category AS fc 
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id 
	INNER JOIN sakila.film AS f ON fc.film_id = f.film_id 
	WHERE c.`name` = selected_category;
END $$

DELIMITER ;
CALL ExibirFilmesDaCategoriaSelecionada('Drama');

/*
Exercício 3: Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o 
cliente está ou não ativo, através de um parâmetro de saída.
*/
USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaSeClienteEstaAtivo(IN email_customer VARCHAR(150), OUT active_customer INT)
BEGIN
	SELECT 
	`active` 
	FROM sakila.customer
	WHERE email = email_customer 
    INTO active_customer;
END $$

DELIMITER ;
SET @active_customer = 0;
CALL VerificaSeClienteEstaAtivo('MARIA.MILLER@sakilacustomer.org', @active_customer);
SELECT @active_customer;


-- Stored Functions


-- Tipos de retorno comuns:
/*
DETERMINISTIC - Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;
READS SQL DATA - Indica para o MySQL que sua função somente lerá dados.
*/


-- Estrutura padrão de uma stored function
/*
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;
*/

USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:
SELECT MoviesWithActor(1);

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);


-- Consolidando o conhecimento

/*
Exercício 1: Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
pagamentos feitos até o momento por um determinado customer_id .
*/
USE sakila;
DELIMITER $$
CREATE FUNCTION RetornaQuantidadeTotalDeUsuario(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE count_payment INT;
    SELECT COUNT(*) 
	FROM sakila.payment 
	WHERE customer_id = 1 
    INTO count_payment;
    RETURN count_payment;
END $$
DELIMITER ;

SELECT RetornaQuantidadeTotalDeUsuario(1);

/*
Exercício 2: Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme 
vinculado ao registro de inventário com esse id.
*/
USE sakila;
DELIMITER $$
CREATE FUNCTION RetornaNomeDeFilmeInventario(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE film_inventary VARCHAR(100);
    SELECT f.title 
	FROM sakila.inventory AS i 
	INNER JOIN sakila.film AS f ON i.film_id = f.film_id 
	WHERE inventory_id = id 
    INTO film_inventary;
    RETURN film_inventary;
END $$
DELIMITER ;

SELECT RetornaNomeDeFilmeInventario(3);

/*
Exercício 3: Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 
'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
*/
USE sakila;
DELIMITER $$
CREATE FUNCTION RetornaQuantidadeDeFilmesDaCategoria(selected_category VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE count_movies INT;
    SELECT COUNT(fc.film_id) 
	FROM sakila.film_category AS fc 
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id 
	WHERE c.`name` = selected_category 
    INTO count_movies;
    RETURN count_movies;
END $$
DELIMITER ;

SELECT RetornaQuantidadeDeFilmesDaCategoria('Horror');


-- Criando reações dinâmicas com Triggers


-- Momentos em que um trigger pode ser disparado
/*
BEFORE : antes que alguma ação seja executada;
AFTER : após alguma ação já ter sido executada.
*/

-- O que pode ativar um Trigger?
/*
INSERT ;
UPDATE ;
DELETE .
*/

-- O que pode ser acessado dentro de um trigger?
/*
O valor OLD de uma coluna: valor presente em uma coluna antes de uma operação;
O valor NEW de uma coluna: valor presente em uma coluna após uma operação.
*/

-- Sintaxe
/*
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END

DELIMITER $$ ;
*/

-- Exemplo
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

-- Exemplo de trigger para o INSERT:
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;


-- Exemplo de trigger para o UPDATE:
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;


-- Exemplo de trigger para o DELETE:
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;


-- It's Trigger Time
CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

/*
Exercício1: Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna 
data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque 
para 1 .
*/
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_insert
	BEFORE INSERT ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
		NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO betrybe_automoveis.carros (preco) VALUES (50000.00);

SELECT * FROM betrybe_automoveis.carros;

/*
Exercício2: Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna 
data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
*/
DELIMITER $$
CREATE TRIGGER trigger_carros_update
	BEFORE UPDATE ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE betrybe_automoveis.carros SET preco = 60000.00 WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.carros;

/*
Exercício3: Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela 
log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da 
operação.
*/
DELIMITER $$
CREATE TRIGGER trigger_carros_delete
	AFTER DELETE ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	INSERT INTO betrybe_automoveis.log_operacoes (tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM betrybe_automoveis.carros WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.carros;
SELECT * FROM betrybe_automoveis.log_operacoes;
