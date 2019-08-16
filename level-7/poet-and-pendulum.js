/****************************************************************************************
 * https://www.codewars.com/kata/5bd776533a7e2720c40000e5
 * Task:
 * Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro 
 * movement of a Pendulum/ The Smallest element of the list of integers , must come in center
 * position of array/list.
 * The Higher than smallest , goes to the right .
 * The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner
 * similar to that of a Pendulum.
 * Notes:
 * Array/list size is at least *3*** .
 * In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)
 * Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).
 * Example:
 * pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
 * pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
 * pendulum ([11, -16, -18, 13, -11, -12, 3, 18 ]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
/*****************************************************************************************/


/*************************************** my solution *************************************/
function pendulum(values) {
  let right = (values.length - 1) / 2 | 0;
  let left = right - 1;
  return values.sort((a,b) => a - b).reduce((pend,current,index) => {
    if(!index){
      pend[right++] = current;
      return pend;
    }
    index % 2 === 0 ? pend[left--] = current : pend[right++] = current
    return pend;
  },[]);
}


/*********************************** the best solution ***********************************/
function pendulum(values) {

  let sort = values.slice().sort((a, b) => a - b)
  ,  parts = { left: [], right: [] };
  
  for (let i = 0; i < sort.length; i++) 
    parts[i % 2 ? 'right' : 'left'].push(sort[i]);

  return parts.left.reverse().concat(parts.right);
  
}