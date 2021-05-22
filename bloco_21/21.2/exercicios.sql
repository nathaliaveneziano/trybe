
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
         
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e 
-- internacionais ( internationa_sales ) de cada filme.
SELECT mov.title, box.domestic_sales, box.international_sales 
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS box ON box.movie_id = mov.id;
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme 
-- que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais 
-- ( domestic_sales ).
SELECT mov.title, box.rating 
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS box ON box.movie_id = mov.id
ORDER BY box.rating DESC;
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação 
-- ( rating ) em ordem decrescente.
SELECT mov.title, box.domestic_sales, box.international_sales 
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS box ON box.movie_id = mov.id;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os 
-- que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes 
-- cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT the.name, mov.title
FROM Pixar.Theater AS the
LEFT JOIN Pixar.Movies AS mov ON mov.theater_id = the.id
ORDER BY the.name ASC;
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os 
-- que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT the.name, mov.title
FROM Pixar.Theater AS the
RIGHT JOIN Pixar.Movies AS mov ON mov.theater_id = the.id
ORDER BY the.name ASC;
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem 
-- os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT mov.title 
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS box ON box.movie_id = mov.id
WHERE box.rating > 7.5;

SELECT title 
FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE rating > 7.5
);
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem 
-- as avaliações dos filmes lançados depois de 2009.
SELECT box.rating
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS mov ON mov.id = box.movie_id
WHERE mov.year > 2009;

SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id
    FROM Pixar.Movies
    WHERE year > 2009
);
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em 
-- cartaz.
SELECT *
FROM Pixar.Theater as the
WHERE EXISTS(
	SELECT *
    FROM Pixar.Movies
    WHERE theater_id = the.id
);
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes 
-- em cartaz.
SELECT *
FROM Pixar.Theater as the
WHERE NOT EXISTS(
	SELECT *
    FROM Pixar.Movies
    WHERE theater_id = the.id
);
