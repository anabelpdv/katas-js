/****************************************************************************************
 * https://www.codewars.com/kata/5656b6906de340bd1b0000ac
 * Task:
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new 
 * sorted string, the longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2.
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
/*****************************************************************************************/

/*************************************** my solution *************************************/
function longest(s1, s2) {
let arr =[...s1,...s2];
return arr.reduce((longest, letter) => { 
      if (!longest.includes(letter)){
            longest.push(letter);    
      }
      return longest;
      }, []).sort().join("");
}

/*********************************** the best solution ***********************************/
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')