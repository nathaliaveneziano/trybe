/* Chamada da função sem passar o argumento que ela espera */
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


/* Chamada da função sem passar o argumento que ela espera */
const greeting2 = (user) => {
  user = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${user}!`);
};

greeting2(); // Welcome usuário!


/* Definindo um parâmetro padrão (default) para a função */
const greeting3 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting3(); // // Welcome usuário!


/*

Exercício
Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

*/
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));