/* Erro quando uma propriedade não existe */
const person1 = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality: nationality1 } = person1;
console.log(nationality1); // undefined


/* Valor padrão as propriedades */
const { nationality: nationality2 = "Brazilian" } = person1;
console.log(nationality2); // Brazilian


/* O mesmo pode ser feito com array */
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(z); // 0


/*

Exercício
Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined. Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian.

*/
const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person));