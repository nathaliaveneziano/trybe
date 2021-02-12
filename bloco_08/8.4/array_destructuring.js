const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

/* Modo tradicional buscando informação pelo index do array */
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


/* Modo desestruturação */
const [ firstCountry2, secondCountry2, thirdCountry2, fourthCountry2 ] = arrayCountries;

console.log(firstCountry2); // Brazil
console.log(secondCountry2); // Japan
console.log(thirdCountry2); // China
console.log(fourthCountry2); // Canada


/*

Exercício 01
Use a atribuição de desestruturação para trocar os valores de ae de bforma que areceba o valor armazenado em be breceba o valor armazenado em a.

*/
let a = 8, b = 6;
[a, b] = [b, a];


/*

Exercício 02
Use a atribuição de desestruturação com o parâmetro rest para realizar um efeito de Array.prototype.slice()modo que arrseja uma submatriz da matriz original sourcecom os primeiros dois elementos omitidos.

*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);