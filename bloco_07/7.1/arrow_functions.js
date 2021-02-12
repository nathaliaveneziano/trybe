// Code 01
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Code 02
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Code 03
const printName = () => "Lucas";
console.log(printName());

// Code 04
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Code 05
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));