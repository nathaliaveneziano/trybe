const { Console } = require("console");

/* EXIBINDO O VALOR DO ARRAY NA FRASE ABAIXO */
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// => Cada elemento do array: josé
//    Cada elemento do array: 50
//    Cada elemento do array: 0.25
//    Cada elemento do array: { comida: 'Chocolate' }


/* VERIFICANDO E EXIBINDO OS MÚLTIPLOS DE 2 */
const meuArray = [0, 2, 3, 1, 21, 31, 21, 22, 32, 33, 23, 34];
meuArray.forEach(elemento => {
    if(elemento % 2 === 0) { 
      console.log(`${elemento} é divísivel por 2!`)
    } 
  }
)

// => 0 é divísivel por 2!
//    2 é divísivel por 2!
//    22 é divísivel por 2!
//    32 é divísivel por 2!
//    34 é divísivel por 2!


/* EXIBINDO TODOS OS PARÂMETROS DO FOREACH ATRAVÉS DAS FRASES ABAIXO */
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('---------------');
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]