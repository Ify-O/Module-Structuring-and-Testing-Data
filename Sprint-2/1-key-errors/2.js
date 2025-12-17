
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
        // I think this will give an error because the function square is passed a number instead of a parameter 'num'. Also, it'll need a console.log to be able to log the codes.
//function square(3) {
//    return num * num;
//}

// =============> write the error message here
        ///Users/occ-0057/Documents/MCB/WebForms/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
        //function square(3) {
         //               ^

        //SyntaxError: Unexpected number
          //  at internalCompileFunction (node:internal/vm:73:18)
           // at wrapSafe (node:internal/modules/cjs/loader:1176:20)
            //at Module._compile (node:internal/modules/cjs/loader:1218:27)
            //at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
            //at Module.load (node:internal/modules/cjs/loader:1117:32)
            //at Module._load (node:internal/modules/cjs/loader:958:12)
            //at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            //at node:internal/main/run_main_module:23:47


// =============> explain this error message here
        // it says on this js file line 8 there is an unexpected number which isn't supposed to be there.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(24))

