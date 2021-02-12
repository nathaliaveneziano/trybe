/* ORDENANDO ARRAY DE STRINGS */
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


/* ORDENANDO ARRAY NÚMERICO, MAS COM UM PROBLEMA  */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

/* A ORDENAÇÃO PADRÃO É POR ORDEM ALFABÉTICA (UNICODE) E QUANDO UTILIZAMOS O UM ARRAY NÚMERO, O PRIMEIRO CARACTER DO NÚMERO É QUE VAI SER LEVADO EM CONTA E NÃO SEU VALOR, POR ISSO DEVEMOS ADICIONAR DOIS VALORES A FUNÇÃO E COMPARAMOS, DA SEGUINTE FORMA, DE ACORDO COM OS VALORES QUE QUEREMOS:

meuArray.sort((valor1, valor2) => {

- return a - b = QUANDO QUEREMOS EM ORDEM CRESCENTE
- return a + b = QUANDO QUEREMOS EM ORDEM DECRESCENTE

SE O VALOR FOR NEGATIVO, MOVE O ELEMENTO PARA FRENTE, CASO CONTRÁRIO, MOVE PARA TRÁS.

});

*/

/* ARRAY ORDENADO DE FORMA CRESCENTE */
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]


/* ARRAY ORDENADO DE FORMA DECRESCENTE */
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]