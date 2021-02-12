// RETORNO DE ARRAY COM NOME COMPLETO ATRAVÉS DE FOR
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);
console.log('----------');



// RETORNO DE ARRAY COM NOME COMPLETO ATRAVÉS DE MAP
const persons2 = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
console.log('----------');



// TRANSFORMAR ARRAY DE NÚMEROS POSITIVOS PARA NEGATIVO EM MAP
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
console.log('----------');



// TRANSFORMAR ARRAY DE NÚMEROS POSITIVOS PARA NEGATIVO EM FOR
const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = [];
for (let i = 0; i < numbers2.length; i += 1) {
  if (numbers2[i] > 0) {
    negativeNumbers2.push(numbers2[i] * -1);
  } else {
    negativeNumbers2.push(numbers2[i]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers2); // [ 1, 2, 3, 4, -5 ]
console.log('----------');



// 
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
console.log('----------');
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]


// VERIFICA SE O NÚMERO É PAR E MENOR QUE CINCO ATRAVÉS DO FOREACH
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map(numero => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach(numero => {
  if(numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
})
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
console.log('----------');


// 
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
]

// TODOS OS ESTUDANTES DO TURNO DA MANHÃ COM FOR E IF
const allNameStudents = [];

for(let i = 0; i < estudantes.length; i += 1 ){
  if(estudantes[i].turno === 'Manhã'){
    allNameStudents.push(`${estudantes[i].nome} ${estudantes[i].sobrenome}`)
  }
}

console.log(allNameStudents)
console.log('----------');

// TODOS OS ESTUDANTES DO TURNO DA MANHÃ COM MAP E FILTER
const allNameStudents2 = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')
).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents2);
console.log('----------');


// RETORNAR ESTUDANTE E SUA SITUAÇÃO COM FOR E IF
const reportStatus = (name, students) => {
  let getStudent;
  for (let i = 0; i < students.length; i += 1 ) {
    if (students[i].nome === name) {
      getStudent = students[i];
      break;
    }
  }

  let report = [];
  for (let i = 0; i < getStudent.materias.length; i += 1) {
    if (getStudent.materias[i].nota >= 60) {
      report.push(`${getStudent.materias[i].name} Aprovado`)
    } else {
      report.push(`${getStudent.materias[i].name} Reprovado`)
    }
  }
  return report;
}

console.log(reportStatus('Natalia', estudantes))
console.log('----------');


// RETORNAR ESTUDANTE E SUA SITUAÇÃO COM FIND E MAP
const reportStatus2 = (name, students) => {
  const student = students.find((student) => student.nome === name);
  return student.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus2('Natalia', estudantes));