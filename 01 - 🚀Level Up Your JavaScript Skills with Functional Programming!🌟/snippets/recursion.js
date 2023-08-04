// // Without Recursion
// const customerName = ["Mr.", "Rushang", "Vikramsingh", "Chauhan"]

// function convertNameArrayToString(nameArray) {
//     let fullName;
//     for (const namePart of nameArray) {
//         fullName = fullName ? `${fullName} ${namePart}` : namePart
//     }
//     return fullName;
// }

// console.log(convertNameArrayToString(customerName));


// With Recursion
const customerName = ["Mr.", "Rushang", "Vikramsingh", "Chauhan"]

function convertNameArrayToString(nameArray) {
  if (nameArray.length === 1) return nameArray[0];
  return `${nameArray[0]} ${convertNameArrayToString(nameArray.slice(1))}`
}

console.log(convertNameArrayToString(customerName));
