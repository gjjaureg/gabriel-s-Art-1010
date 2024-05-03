// index.js - to create functions taht receive user input and sorts the letters
// Author: Gabriel Jauregui
// Date:5/2/2024

//take user input asking for their name
var userName = window.prompt("What is your name: ")

function sortName(name){
    //splits the string
    var nameSplit = name.split('');
    //sorts every letter in the splitted string
    var sortSplit = nameSplit.sort();
    //returns sorted name and joins the letter together 
    return sortSplit.join('');
}
//write in the ouputed name that has been sorted
document.writeln("your name sorted is ", sortName(userName), "</br>");