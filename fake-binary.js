/****************************************************************************************
 * https://www.codewars.com/kata/57eae65a4321032ce000002d
 * Task:
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit
 * 5 and above with '1'. Return the resulting string. 
/*****************************************************************************************/


/*************************************** my solution *************************************/
function fakeBin(x){
   return[...x].map(digit => +digit < 5 ? 0 : 1) .join("");
}

/*********************************** the best solution ***********************************/
function fakeBin(x) {
	//n is automatically converted to a number when compared to 5 which is a number
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}