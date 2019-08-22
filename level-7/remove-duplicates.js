/****************************************************************************************
 * https://www.codewars.com/kata/5b39e3772ae7545f650000fc
 * Task:
 * Remove all duplicate words from a string, leaving only single (first) words entries.
 * Example:
 * Input:
 * 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 * Output:
 * 'alpha beta gamma delta'
/*****************************************************************************************/


/*************************************** my solution *************************************/
function removeDuplicateWords (s) {
  return s.split(' ').reduce((unique,word)=>{
    if(unique.indexOf(word) < 0){
     unique.push(word);
      return unique;
    }
    return unique
    },[]).join(' ');
}


/*********************************** the best solution ***********************************/
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');