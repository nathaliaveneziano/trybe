-- Como utilizar o INNER JOIN

-- SELECT t1.coluna, t2.coluna
-- FROM tabela1 AS t1
-- INNER JOIN tabela2 AS t2
-- ON t1.coluna_em_comum = t2.coluna_em_comum;

-- Código sem alias
SELECT sakila.actor.first_name, sakila.actor.actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER join sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;

-- Código com alias
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- Código com alias omitido
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- Consolidando o conhecimento

-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as 
-- tabelas actor e film_actor .
SELECT a.actor_id, CONCAT(a.first_name, ' ', last_name) AS name, fa.film_id
FROM sakila.film_actor fa
INNER JOIN sakila.actor AS a ON a.actor_id = fa.actor_id;
-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as 
-- tabelas staff e address .
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN sakila.address AS a ON a.address_id = s.address_id;
-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem 
-- decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações 
-- podem ser encontradas nas tabelas customer e address .
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address AS a ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da 
-- California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas 
-- address e customer .
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address AS a ON a.address_id = c.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';
-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes 
-- de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na 
-- tabela address e customer .
SELECT c.first_name, COUNT(a.address) AS `quantidade de endereço`
FROM sakila.customer c
INNER JOIN sakila.address AS a ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;
-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no 
-- ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e 
-- sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff s
INNER JOIN sakila.payment AS p ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.first_name, s.last_name;
-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor a
INNER JOIN sakila.film_actor AS fa ON fa.actor_id = a.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;

-- Como utilizar o LEFT JOIN e o RIGHT JOIN

-- LEFT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- O que é SELF JOIN e quando utilizá-lo

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Consolidando o conhecimento

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost 
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;
-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os 
-- filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration 
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.rental_duration = f2.rental_duration AND f1.rental_duration BETWEEN 2 AND 4;

-- Como unir resultados com o UNION e o UNION ALL

-- Consolidando o conhecimento

-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff 
-- com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum 
-- funcionário ao unir as tabelas.
(SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM sakila.staff)
UNION ALL
(SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM sakila.actor);
-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a 
-- palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados 
-- únicos.
(SELECT UCASE(first_name) AS first_name FROM sakila.customer WHERE LCASE(first_name) LIKE '%tracy%')
UNION
(SELECT UCASE(first_name) AS first_name FROM sakila.actor WHERE LCASE(first_name) LIKE '%je%');
-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela 
-- staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos 
-- sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT UCASE(first_name) AS first_name FROM sakila.actor ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT UCASE(first_name) AS first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT UCASE(first_name) AS first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;
-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco 
-- de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e 
-- que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM sakila.customer)
UNION
(SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM sakila.actor)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;

-- Como utilizar uma SUBQUERY

-- Usando uma SUBQUERY como fonte de dados para o FROM .
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY .
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY .
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- Criando queries mais dinâmicas através do EXISTS

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram 
-- emprestados.
SELECT b.Id, b.Title 
FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * 
    FROM hotel.Books_Lent AS bl
    WHERE bl.book_id = b.Id
);
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente 
-- emprestados e que contêm a palavra "lost" no título.
SELECT b.Id, b.Title 
FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * 
    FROM hotel.Books_Lent AS bl
    WHERE bl.book_id = b.Id AND bl.returned = 0
) AND LCASE(b.Title) LIKE '%lost%';
-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um 
-- carro.
SELECT c.Name 
FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * 
    FROM hotel.CarSales AS cs
    WHERE cs.CustomerID = c.CustomerId
);
-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome 
-- do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cu.Name, ca.Name
FROM hotel.Customers AS cu
INNER JOIN hotel.Cars as ca
WHERE EXISTS (
	SELECT *
    FROM hotel.CarSales AS cs
    WHERE cs.CarID = ca.Id AND cs.CustomerID = cu.CustomerId
);
