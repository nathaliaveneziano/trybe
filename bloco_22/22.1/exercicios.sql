/*
Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As 
informações a serem armazenadas sobre cada animal são:
	Nome;
	Espécie;
	Sexo;
	Idade;
    Localização. Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por 
    mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser 
    responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa 
    base de dados.
*/

-- Animais: Animal_id, Nome, Especie, Sexo, Idade, Localizacao
-- Cuidadores: Cuidador_id, Nome, Gerente_id
-- Cuidador_Animal: Cuidador_id, Animal_id
-- Gerentes: Gerente_id, Nome

DROP DATABASE IF EXISTS zoologico;

CREATE DATABASE zoologico;

USE zoologico;

CREATE TABLE Animais (
	animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    especie VARCHAR(100) NOT NULL, 
    sexo VARCHAR(50) NOT NULL, 
    idade INT NOT NULL, 
    localizacao VARCHAR(100) NOT NULL
);

CREATE TABLE Gerentes (
	gerente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL
);

CREATE TABLE Cuidadores (
	cuidador_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cuidador VARCHAR(200) NOT NULL,
	gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes (gerente_id)
);

CREATE TABLE Cuidador_Animal (
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (cuidador_id, animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES Animais (animal_id)
);