/* Inserção de elemento ao array via PUSH */
// const numbers = [1, 2, 3];
// numbers.push(4);

// console.log(numbers); // [1, 2, 3, 4];


/* Espalhando (copiando) um array e inserido novos dados a este */
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];


/* Transformando vários array num único array */
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */


/* Expandindo os valores de um array no argumento da função que calcula o IMC */
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


/* Aplicando esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros */
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5


/* O mesmo pode ser feito com objetos */
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */


/* Exercício */
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Morango', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Castanhas', 'Canela'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));