// // Without first-class functions
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// const calculate = (operation, a, b) => {
//   if (operation === 'add') {
//     return add(a, b);
//   } else if (operation === 'subtract') {
//     return subtract(a, b);
//   }
// };

// console.log(calculate('add', 5, 3)); // Output: 8
// console.log(calculate('subtract', 10, 5)); // Output: 5


// With first-class functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const calculate = (operation, a, b) => operation(a, b);

console.log(calculate(add, 5, 3)); // Output: 8
console.log(calculate(subtract, 10, 5)); // Output: 5

