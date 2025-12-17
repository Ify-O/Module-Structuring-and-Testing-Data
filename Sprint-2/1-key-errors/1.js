// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
    //the error will happen because there is a second assignation of the same variable "decimalNumber" using const after it has been declared in the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
    // as predicted, it says on line 10 there is an error. it explains it's a syntax error because the identifier 'decimalNumber' has been declared. Also just removing the keyword 'const' doesn't solve the problem. The declaration of the variable on line 10 doesn't mean its declared for the the console.log to log it in the terminal. itt needs to be declared in the console, so we have tto remove the repetition.
    // Also on line 15, the console.log needs to call the input of the function and not the variable.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

