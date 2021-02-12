// Exercício 01
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Exercício 02 e 03
const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: "User with " + id + " not found." });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

// Exercício 04
const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
    .catch((error) => error.message);
};

// Exercício 06
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// FIND BY NAME
const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }

      return reject("Nenhum animal com esse nome!");
    }, 100);
  });

const getAnimal = (name) => findAnimalByName(name).then((list) => list);

// FIND BY AGE
const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }

      return reject("Nenhum animal com essa idade!");
    }, 100);
  });

const getAnimalAge = (age) => findAnimalByAge(age).then((list) => list);

module.exports = { uppercase, getUserName, getRepos, getAnimal, getAnimalAge };
