/****************************************************************************************
 * https://www.codewars.com/kata/5a512f6a80eba857280000fc
 * Task:
 * Given an array/list [] of integers , Find the Nth smallest element in this array of integers
 * Example:
 * nthSmallest({3,1,2} ,2) ==> return (2) 
 * nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
 * nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
/*****************************************************************************************/


/*************************************** my solution *************************************/
function nthSmallest(arr, pos){
  return arr.sort((a,b)=>a-b)[--pos];  
}


/*********************************** the best solution ***********************************/
function nthSmallest(arr, pos){
  return arr.sort((a,b)=>a-b)[pos-1]
}
