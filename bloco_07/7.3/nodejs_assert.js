/* Sintaxe para incluir o módulo assert para a realizaçãode testes */
const assert = require('assert');


/* Conhecendo NodeJS Assert */
assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70


/* Testando função com EQUAL e STRICTEQUAL */
function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, '3', 'Nove dividido por três é igual a três'); // Sem erros: 3 = '3'
// assert.strictEqual(expected, '3', 'Nove dividido por três é igual a três'); // Erro: 3 == '3'


/* Combinando vários métodos do assert */
function add(a, b) {
  return a + b;
}

const expected2 = add(1, 2);

// Checa se o primeiro argumento é verdadeiro
assert.ok(expected2 === 3, 'Um mais dois é igual a três');

// Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.strictEqual(expected2, 3, 'Um mais dois é igual a três');

// Checa se o primeiro e segundo argumentos são diferentes (!==) 
assert.notStrictEqual(expected2, 4, 'Um mais dois é igual a três (e não quatro!)');


/* Testando estruturas como arrays e objetos */
const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');


/* Fragilidade na implementação da função abaixo */
function division(x, y) {
  return x / y;
}

// OK
assert.strictEqual(division(10, 2), 5);

// Erro, pois a função não poderia realizar a divisão por 0
// assert.strictEqual(division(10, 0), 0);

/* Ajustes na função anterior e utilização de THROW */
function division(x, y) {
  // Lançando um erro, caso o segundo parâmetro seja 0
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK