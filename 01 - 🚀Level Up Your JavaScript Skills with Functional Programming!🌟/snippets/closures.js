
// Closures
function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // This will access outerVariable from the outer scope
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: "I am from the outer function"