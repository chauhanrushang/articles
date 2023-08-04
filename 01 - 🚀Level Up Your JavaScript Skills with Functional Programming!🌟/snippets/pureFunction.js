
// // impure function
// let counter = 0;

// const increment = () => {
//   counter++;                         // Side effect: Mutating global variable
//   console.log(`counter: ${counter}`) // Side effect: Logging to console
//   return counter;
// };

// console.log(increment()); // Output: 1
// console.log(increment()); // Output: 2


// Pure function
const increment = (value) => value + 1;

let counter = 0;
console.log(increment(counter)); // Output: 1
console.log(increment(counter)); // Output: 1 (Output remains unchanged)
