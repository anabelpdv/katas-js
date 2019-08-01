/****************************************************************************************
 * https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
 * Task:
 * Complete the function which converts a binary number (given as a string) to a decimal number.
/*****************************************************************************************/


/*************************************** my solution *************************************/
function binToDec(bin){
  let pow = bin.length;
  return bin.split("").reduce((total,num) => +num === 1 ? total + 2 ** --pow : total + 0 * --pow ,0);
}
 /*********************************** the best solution ***********************************/
 function binToDec(bin){
  return parseInt(bin,2);
}