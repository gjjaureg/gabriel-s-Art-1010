// index.js - to utilize jQuery to make a special button
// Author: Gabriel Jauregui
// Date:5/12/2024

$("#My-button").append("<button id='my-button'>name button</button>");


$(document).on('click', '#My-button', function(){
    var name = prompt("name please: ");
    $('#title').html("Hello " + name)
});

