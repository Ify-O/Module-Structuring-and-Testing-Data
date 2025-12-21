// Predict and explain first...
//  =============> write your prediction here
    // this will give an error because the parameters for str has been declared and it is trying to declare it again using let. Function parameters are already variables. We cannot redeclare the same variable name with let or const in the same scope


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
    //it says on line 9, the let str is a error. this is because the identifier str has already been declared meaning i shouldn't be reassigning with the let keyword. 
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("migracode"));