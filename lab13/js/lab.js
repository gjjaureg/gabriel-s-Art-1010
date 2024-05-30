/*
   lab.js - functions that rely on conditionals

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