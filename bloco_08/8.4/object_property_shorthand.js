/* Objeto com propriedade e valor com mesmo nome */
// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

/* Objeto com feature property shorthand */
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com'));
// { id: 54, name: 'isabella', email: 'isabella@email.com' }


/*

Exercício
Altere a função getPosition utilizando a property shorthand.

*/
const getPosition = (latitude, longitude) => ({
  // latitude: latitude,
  // longitude: longitude});
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));