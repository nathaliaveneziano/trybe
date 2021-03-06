/* Função com quantidade de argumentos variáveis */
function quantosParams(...args) {
  console.log('parâmetros:', args)
  return `Você passou ${args.length} parâmetros para a função.`;
};

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


/* Somatório de valóres de um array */
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60)); // 88