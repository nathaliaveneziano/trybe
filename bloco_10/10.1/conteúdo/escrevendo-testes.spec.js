const sum = require('./escrevendo-testes');

/*

A função espera três argumentos. 

1) Nome do teste.
Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados.

2) Função contendo suas expectations.
É dentro dessa função que você fará os testes propriamente ditos. 

3) (opcional) Timeout
Indica quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

*/
test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});