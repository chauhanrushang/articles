// // not immutable
// const originalArray = [1, 2, 3];
// originalArray.push(4);  // data mutation

// console.log(originalArray); // Output: [1, 2, 3, 4]


// immutable
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); // Output: [1, 2, 3]
console.log(newArray); // Output: [1, 2, 3, 4]

