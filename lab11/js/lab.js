/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/

function sortString(name){
  //splits the string
  var nameSplit = name.split('');
  //sorts every letter in the splitted string
  var sortSplit = nameSplit.sort();
  //returns sorted name and joins the letter together 
  return sortSplit.join('');
}
// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});