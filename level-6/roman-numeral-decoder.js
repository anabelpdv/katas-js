/****************************************************************************************
 * https://www.codewars.com/kata/51b6249c4612257ac0000005
 * Task:
 * Create a function that takes a Roman numeral as its argument and returns its value as 
 * a numeric decimal integer. You don't need to validate the form of the Roman numeral.
 * Modern Roman numerals are written by expressing each decimal digit of the number to 
 * be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 
 * is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" 
 * (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in 
 * descending order.
 * Example: 
 * solution('XXI'); // should return 21

/*****************************************************************************************/


/*************************************** my solution *************************************/
let values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
 function solution(roman){
    let array = roman.split("");
    let number = 0;
    let j = 0;
    
    if(array.length == 1){
      return values[array[0]];
    }
    
    for(let i = 1; i < array.length; i++){
      if(values[array[j]] >= values[array[i]]){
          if(i - array.length === - 1){
            number += values[array[i]];
          }
            number += values[array[j]];
        j = i;
      }else{
        number += (values[array[i]] - values[array[j]]);
      }
    }
  return number;
}


/*********************************** the best solution ***********************************/
function solution(roman)
{
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++)
  {
    if(data[numbers[i]] < data[numbers[i+1]])
    {
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
      sum += data[numbers[i]];
    }
  }
  
  return sum;
}
