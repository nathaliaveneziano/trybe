const sum = (a, b) => a + b;

// toBe = é para a variável. Os tipos primitivos (Ex. number, string, boolean, etc) a atribuição ocorre por valor 
let name = "Pedro";
let firstName = name;

name = "Carol";

// console.log(name); // Carol
// console.log(firstName); // Pedro


// toEqual = é para propriedade do objeto (valor e referência). Os objetos (Ex. Objetos, Funções, Arrays, etc), a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, por tanto podemos considerar que é uma forma de criar um apelido ( alias ) para o original
let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

// console.log(myName.firstName); // Carol
// console.log(identity.firstName); // Carol

module.exports = sum;