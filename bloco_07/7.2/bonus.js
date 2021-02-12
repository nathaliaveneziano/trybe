const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const studentsNumberMath = obj => {
  const keys = Object.keys(obj);
  let countStudentsMath = 0;

  for (index in keys) {
    if (obj[keys[index]].materia === 'Matemática') {
      countStudentsMath += obj[keys[index]].numeroEstudantes;
    }
  }
  return countStudentsMath;
}
console.log(studentsNumberMath(allLessons));
console.log('--------------');

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
const createReport = (obj, name) => {
  const keys = Object.keys(obj);
  const newObj = {
    materia: [],
    numeroEstudantes: 0,
    professor: '',
    turno: [],
  };

  for (index in keys) {
    if (obj[keys[index]].professor === name) {
      (newObj.materia).push(obj[keys[index]].materia);
      newObj.numeroEstudantes += obj[keys[index]].numeroEstudantes;
      newObj.professor = name;
      (newObj.turno).push(obj[keys[index]].turno);
    }
  }
  return newObj;
}
console.log(createReport(allLessons, 'Maria Clara'));