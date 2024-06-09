/*
   lab.js - loops

   Author: Gabriel Jauregui
   Date: 2024
*/

function fizzBuzzBoom(maxNums, factorObj){
  for (var num = 0; num<maxNums; num++){
    var outputStr = "";
    for(var factor in factorObj){
      if (num % fcator == 0){
        outputStr += factorObj[factor];
      }
    }
    if (outputStr){
      outputStr = " - " + outoutStr + "!";
    }
    outputToPage(num.toString()+outputStr)
  }
}

function fizzBuzz() {
  for (let num = 1; num <= 200; num++) {
      let output = "";
      if (num % 3 === 0) {
          output += "Fizz";
      }
      if (num % 5 === 0) {
          output += "Buzz";
      }
      if (num % 7 === 0) {
          output += "Boom";
      }
      if (output === "") {
          output = num;
      }
      
  }
}

function reportError(str){
  outputEl.innerHTML = "<div class ='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function(){
  var max = docuemnt.getElementById("max").value;
  console.log("max:", max)
  if (! max){
    reportError("You must provide a mximum");
  }
})