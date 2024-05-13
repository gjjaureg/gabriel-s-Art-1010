// index.js - to utilize jQuery to make a special button
// Author: Gabriel Jauregui
// Date:5/12/2024

$("#challenge").append("<button id='button-challenge'>Make Special</button>");

console.log("script run");

$(document).on('click', '#challenge', function(){
    $("#challenge").toggleClass("special");
});