// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
    // i think there will be a syntaxerror. This error will be from line13. the variable 'num' has been declared with a const keyword and the value set to 103. this means that the console.log will keep calling only the num variable.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
    //The last digit of 42 is 3
    //The last digit of 105 is 3
    //The last digit of 806 is 3
// Explain why the output is the way it is
// It is this way because the num variable has been declared in the global scope so everytime its called in the console it will only use the num value
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(103)}`);
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
