const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

/* Acessando os dados de um objeto */
console.log(product.name);

/* Acessando os dados via object destructuring */
// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas


/* Passando objetos desestruturadas via parâmetro de função */
const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


/* Renomeando as variáveis desestruturadas */
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nameStudent, b: classAssigned, c: subject } = student;

console.log(nameStudent); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática