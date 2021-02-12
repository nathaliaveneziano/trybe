/*

Exercício 02 - ✅
Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Dica: use parâmetro rest.

*/
const assert = require('assert')

// escreva sum abaixo
const sum = (...args) => args.reduce((acc, value) => acc + value, 0);

console.log(sum());
assert.strictEqual(sum(), 0);

console.log(sum(1));
assert.strictEqual(sum(1), 1);

console.log(sum(1, 2));
assert.strictEqual(sum(1, 2), 3);

console.log(sum(1, 2, 3));
assert.strictEqual(sum(1, 2, 3), 6);

console.log(sum(1, 2, 3, 4));
assert.strictEqual(sum(1, 2, 3, 4), 10);