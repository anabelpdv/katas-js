/****************************************************************************************
 * https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript
 * Task:
 * Your are given a string. You must replace the word(s) coverage by covfefe, however, 
 * if you don't find the word coverage in the string, you must add covfefe at the end 
 * of the string with a leading space.
 * For the languages where the string is not immutable (such as ruby), don't modify the given 
 * string, otherwise this will break the test cases.
/*****************************************************************************************/


/*************************************** my solution *************************************/
function covfefe(str){
 return str.includes('coverage')? str.replace(/coverage/g,'covfefe') : str+=' covfefe';
}


/*********************************** the best solution ***********************************/
function covfefe(str) {
  const res = str.replace(/coverage/g, "covfefe")
  return res === str ? str + " covfefe" : res
}

