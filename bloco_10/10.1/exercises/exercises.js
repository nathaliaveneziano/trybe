/* Parte I*/
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

/* Parte II */
// Exercício 01
const encode = (phrase) => {
  return phrase
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
};

const decode = (phrase) => {
  return phrase
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
};

// Exercício 02
const techList = (tech, name) => {
  if (tech.length === 0) return "Vazio!";

  const objectTech = tech.sort().map((item) => ({ tech: item, name }));

  if (objectTech.length === 0) return "Vazio!";

  return objectTech;
};

// Exercício 03
const hydrate = (drinks) => {
  const countDrinks = drinks
    .match(/\d+/g)
    .reduce((acc, value) => acc + parseInt(value), 0);

  if (countDrinks === 1) return `${countDrinks} copo de água`;

  return `${countDrinks} copos de água`;
};

// Bônus
// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const employeeFind = professionalBoard.find((employee) => employee.id === id);
  // console.log(employeeFind);

  if (!employeeFind) throw new Error("ID não identificada");
  if (!employeeFind[detail]) throw new Error("Informação indisponível");

  return employeeFind[detail];
};

// console.log(searchEmployee("1256-8", "specialities"));

module.exports = { sum, encode, decode, techList, hydrate, searchEmployee };
