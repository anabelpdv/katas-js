/****************************************************************************************
 * https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
 * Task:
 * Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings 
 * as an argument and returns a filtered array containing the same elements but with the 'geese'  
 * removed.
 * The geese are any strings in the following array, which is pre-populated in your solution:
 * geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
 * For example, if this array were passed as an argument:
 * ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
 * Your function would return the following array:
 * ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
/*****************************************************************************************/


/*************************************** my solution *************************************/
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((element) => geese.indexOf(element) < 0)
};


 /*********************************** the best solution ***********************************/
 function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};