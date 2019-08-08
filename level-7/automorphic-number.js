/****************************************************************************************
 * https://www.codewars.com/kata/5a58d889880385c2f40000aa
 * Task:
 * Given a number determine if it Automorphic or not .
 * Definition:
 * A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
 * Notes: 
 * The number passed to the function is positive
 * Single-digit numbers are considered Automorphic number.
 * Examples:
 * autoMorphic (25) -->> return "Automorphic"
 * autoMorphic (13) -->> return "Not!!"
 * autoMorphic (76) -->> return "Automorphic"
 * autoMorphic (225) -->> return "Not!!"
 * autoMorphic (625) -->> return "Automorphic"
 * autoMorphic (1) -->> return "Automorphic"
 * autoMorphic (6) -->> return "Automorphic"
/*****************************************************************************************/


/*************************************** my solution *************************************/
function automorphic(n){
 return `${n}` === `${n**2}`.slice(-`${n}`.length) ? 'Automorphic':'Not!!';
}

/*********************************** the best solution ***********************************/
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;