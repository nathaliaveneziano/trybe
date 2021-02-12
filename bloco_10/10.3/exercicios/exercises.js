// Exercício 01
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

// Exercício 04
const convertString = (text) => text.toUpperCase();
const firstLetter = (text) => text.chartAt(0);
const concatTexts = (text1, text2) => `${text1} ${text2}`;

// Exercício 06
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  randomNumber,
  convertString,
  firstLetter,
  concatTexts,
  fetchDog,
};
