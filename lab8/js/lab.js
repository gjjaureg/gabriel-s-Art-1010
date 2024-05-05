// index.js - to create and use anonymous functions and callbacks
// Author: Gabriel Jauregui
// Date:5/4/2024

//create a function that uses math
function MathMech(x){
    var result = x + x;
    return result
}
//create an array of numbers
const mathArray = [ 3, 6, 9]

//use .map to use function on array
mathArray.map(function(x){
    return x - 2;
})

//use and anonymous function
mathArray.map(function(x){
    return x - 2;
})

//sets a variable to map function
let primaMath = mathArray.map(MathMech);
console.log("results: ", primaMath)


