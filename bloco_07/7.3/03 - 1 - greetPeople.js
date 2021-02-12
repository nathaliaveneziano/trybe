/*

Reescrevendo funções utilizando TDD - Exercício 01 - ✅
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

*/
const greetPeople = (people) => {
  const greeting = [];
  
  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// implemente seus testes aqui
const assert = require('assert');
assert.strictEqual(typeof greetPeople, 'function');

assert.deepStrictEqual(greetPeople(parameter), result);