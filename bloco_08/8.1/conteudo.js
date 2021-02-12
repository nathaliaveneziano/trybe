/* MÉTODO TRADICIONAL */ 
/*const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote(student) {
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}

console.log(students);*/

// Retorno
// [
//   { name: 'Maria', note: 70, approved: 'Aprovado' },
//   { name: 'José', note: 56, approved: 'Recuperação' },
//   { name: 'Roberto', note: 90, approved: 'Aprovado' },
//   { name: 'Ana', note: 81, approved: 'Aprovado' }
// ]


/* MÉTODO FOREACH */ 
const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote(student) {
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

students.forEach(verifyNote);

console.log(students);

// Retorno
// [
//   { name: 'Maria', note: 70, approved: 'Aprovado' },
//   { name: 'José', note: 56, approved: 'Recuperação' },
//   { name: 'Roberto', note: 90, approved: 'Aprovado' },
//   { name: 'Ana', note: 81, approved: 'Aprovado' }
// ]


/* MÉTODO TRADICIONAL */ 
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5);
// Retorno 50


/* MÉTODO FIND */ 
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf5);
// Retorno 50