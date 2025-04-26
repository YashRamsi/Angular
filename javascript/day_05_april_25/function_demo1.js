//1. Function declaration has certain name
// Function hoisting will work

function first_function(parameter) {
    console.log("Hello " + parameter);
}   

first_function("World");
function add(a,b) {
    console.log('Addition of ' + a + ' and ' + b + ' is: ' + (a+b));
    // OR 
   // return a + b;
}
add(12,5);

// 2. Function expression / Anonymous function 
// Function expresion, there is no name for it 
// Function hoisting will not work
let sub = function(a,b) {
    console.log('Subtraction of ' + a + ' and ' + b + ' is: ' + (a-b));
    // OR
   // return a - b
}
sub(10,5);


// 3. IIFE (Immediately Invoked Function Expression)
//Use it when try to avoid polluting global scope
// Function will be executed immediately
function mul(a,b){
    console.log('Multiplication of ' + a + ' and ' + b + ' is: ' + (a*b));
    // OR
   // return a * b
} (10,5);

// 4. Arrow function
// It is a lambda function
// Shorter syntax for writing function
// Cannot be used as a constructor and method
// It is a shorter syntax for writing function
//Kind of a function expression with arrow symbol 
let div = (a,b)=>{
    console.log('Division of ' + a + ' and ' + b + ' is: ' + (a/b));
    // OR
   // return a / b
}
div(10,5);


