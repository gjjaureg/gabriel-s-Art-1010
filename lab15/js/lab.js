/*
   lab.js - AJAX

   Author: Gabriel Jauregui
   Date: 2024
*/

document.getElementById("activate").addEventListener('click', function(){
  fetch("https://yesno.wtf/api")
  .then(response => response.json())
  .then(data => {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<p>${data.answer}</p><img src="${data.image}" alt="Yes or No image">`;
  })
  .catch(error => {
    console.error("errror fetching data", error);
    document.getElementById('response').innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
  })
})
