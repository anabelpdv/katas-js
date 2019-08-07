/****************************************************************************************
 * https://www.codewars.com/kata/5a4e3782880385ba68000018
 * Task:
 * Given a number, find if it is Balanced or not .
 * Definition:
 * Balanced number is the number that the sum of all digits to the left of the middle 
 * digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
 * Notes: 
 * If the number has an odd number of digits then there is only one middle digit, e.g. 92645 
 * has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0
 * The middle digit(s) should not be considered when determining whether a number is 
 * balanced or not, e.g 413023 is a balanced number because the left sum and right 
 * sum are both 5.
 * Number passed is always Positive.
 * Return the result as String
 * Examples:
 * balancedNum (7) ==> return "Balanced"
 * balancedNum (295591) ==> return "Not Balanced"
 * balancedNum (959) ==> return "Balanced"
 * balancedNum (27102983) ==> return "Not Balanced"
/*****************************************************************************************/


/*************************************** my solution *************************************/
const balancedNum = (number) => {
let arr = numberToArray(number);
let middle = arr.length/2 | 0;
let middleRight = -arr[middle];
  if (arr.length <= 2){
    return 'Balanced';
  }else if(arr.length % 2 === 0){
    let middleLeft = -arr[middle-1];
  
    return arr.splice(middle).reduce((a,b) => a + b,middleRight) === 
           arr.splice(-middle).reduce((a,b) => a + b,middleLeft) ? 
           'Balanced':'Not Balanced';
  }else{

    return arr.splice(middle).reduce((a,b) => a + b,middleRight) === 
            arr.splice(-middle).reduce((a,b) => a + b) ? 
            'Balanced':'Not Balanced';
  }
}

function numberToArray(number){
  let string = [...`${number}`];
  let numArray = string.map(a => +a);
  return numArray;
}


/*********************************** the best solution ***********************************/
function balancedNum(number) {

  let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced';

}





