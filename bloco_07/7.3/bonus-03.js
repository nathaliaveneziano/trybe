/*

Bônus 03 - ✅
Escreva a função removeMiddle para passar nos testes já implementados.

*/
const assert = require('assert');

// escreva a função removeMiddle aqui
const removeMiddle = arr => {
  const middle = Math.floor(arr.length / 2);
  const remove = [arr[middle]];
  
  arr.splice(middle, 1);

  return remove;
};


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);