// higher-order functions
const multiplyBy = (multiplier) => (num) => num * multiplier;
const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(4));   // Output: 8
console.log(multiplyByThree(4)); // Output: 12
