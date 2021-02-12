/*

Exercício 05 - ✅
Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

*/
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce(((countLetter, name) => countLetter += (name.match(/[A-a]/g) || []).length), 0);
}

assert.deepStrictEqual(containsA(), 20);