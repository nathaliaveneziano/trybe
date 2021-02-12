/*

Exercício 08 - ✅
Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento: Dica: use default params.

*/
const assert = require('assert')

// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`;

console.log(greet("John"));
assert.strictEqual(greet("John"), "Hi John")

console.log(greet("John", "Good morning"));
assert.strictEqual(greet("John", "Good morning"), "Good morning John")

console.log(greet("Isabela", "Oi"));
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")