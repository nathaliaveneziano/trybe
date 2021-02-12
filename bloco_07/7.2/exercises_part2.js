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

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addLesson2 = (obj, key, value) => obj[key] = value;
addLesson2(lesson2, 'turno', 'manhã');
console.log(lesson2);
console.log('--------------');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const showKeysObj = obj => Object.keys(obj);
console.log(showKeysObj(lesson2));
console.log('--------------');

// Crie uma função para mostrar o tamanho de um objeto.
const sizeObj = obj => Object.keys(obj).length;
console.log(sizeObj(lesson2));
console.log('--------------');

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const showValuesObj = obj => Object.values(obj);
console.log(showValuesObj(lesson2));
console.log('--------------');

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
console.log('--------------');

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = obj => {
  const lessons = Object.keys(obj);
  let sumStudents = 0;

  for (index in lessons) {
    sumStudents += obj[lessons[index]].numeroEstudantes;
  }

  return sumStudents;
}
console.log(allStudents(allLessons));
console.log('--------------');

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1, 0));
console.log('--------------');

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const verifyPair = (obj, key, value) => {
  const arrayEntry = Object.entries(obj);
  let boolEntry = false;

  for (index in arrayEntry) {
    if (arrayEntry[index][0] === key && arrayEntry[index][1] === value) {
      boolEntry = true;
    }
  }

  return boolEntry;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
