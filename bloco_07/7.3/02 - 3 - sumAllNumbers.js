/*

Praticando TDD - Escrevendo código para testes - Exercício 03 - ✅
Escreva a função sumAllNumbers para passar nos testes já implementados.

*/
const assert = require('assert');

// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let sum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }

  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);