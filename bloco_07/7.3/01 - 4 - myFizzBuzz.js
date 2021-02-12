/*

Implementação de Testes - Exercício 04 - ✅
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

*/
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(9), 'fizz');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(10), 'buzz');

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(7), 7);

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz('7'), false);