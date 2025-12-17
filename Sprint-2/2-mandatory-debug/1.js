// Predict and explain first...
//  =============> write your prediction here
//this will give a syntax error on line 6 because return is empty and closed with the semi-colon. while the inputs are a different expressions.

//function sum(a, b) {
// return;
// a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//it says The sum of 10 and 32 is undefined. This goes back to the error of the misplacement of the semi-colon
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
