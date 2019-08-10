/****************************************************************************************
 * https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
 * Task:
 * Given an array of intgers , Find the minimum sum which is obtained from summing each 
 * two integers product.
 * Notes: 
 * Array/list will contain positives only .
 * Array/list will always has even size
 * Examples:
 * minSum({5,4,2,3}) ==> return (22) 
 * minSum({12,6,10,26,3,24}) ==> return (342)
 * minSum({9,2,8,7,5,4,0,6}) ==> return (74)
/*****************************************************************************************/


/*************************************** my solution *************************************/
function minSum(arr) {
  arr.sort((a,b) => a - b)
  let sum = 0;
  let left = 0;
  let right = arr.length - 1;
  while((right - left) >= 1){
    sum += arr[left++] * arr[right--];
  }
  return sum;
}

/*********************************** the best solution ***********************************/
function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
