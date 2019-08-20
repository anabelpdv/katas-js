/****************************************************************************************
 * https://www.codewars.com/kata/5cd48cffaae6e30018943175
 * School students Alice and Bob send messages to each other. To ensure that their messages 
 * are not readable by teachers they encrypt text with simple algorythm. Every message 
 * contains only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.
 * So, the encryption algorythm is:
 * Reverse the whole string.
 * Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
 * Insert digits and spaces as is.
 * E.g. this message:
 * 9Hi Alice4
 * is encrypted as
 * 4'101''99''105''108''65' '105''72'9
 * Task:
 * Write function decrypt to get source messages from encrypted strings.
/*****************************************************************************************/


/*************************************** my solution *************************************/
function decrypt (str){
  return str.replace(/'(\d+)'/g, (m,d)=> String.fromCharCode(d)).split("").reverse().join("");
}


/*********************************** the best solution ***********************************/
const decrypt = (str) => {
  return str.replace(/'(\d+)'/g, (_, d) => String.fromCharCode(d)).split('').reverse().join('');
}
