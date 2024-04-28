// index.js - to identify declare myTransport and object myMainRide
// Author: Gabriel Jauregui
// Date:4/27/2024

// Constants
const myTransport = ['bus' ,'car', 'walking'];

let myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "rusty",
  year: 1995,
  age: function () {
      return 2025 - this.year;
  }
}
document.writeln("Kinds of transportation I use ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
JSON.stringify(myMainRide, null, '\t'), "</pre>");



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
