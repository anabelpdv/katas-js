/****************************************************************************************
 * https://www.codewars.com/kata/593c9175933500f33400003e
 * Task:
 * Implement a function, multiples(m, n), which returns an array of the first m multiples 
 * of the real number n. Assume that m is a positive integer.
 * Example:
 * multiples(3, 5) should return vec![5, 10, 15]
/*****************************************************************************************/


/*************************************** my solution *************************************/
function multiples(m, n){
  const multiples = [];
  for(let i = 1; i <= m ; i++){
    multiples.push(i*n);
  }
  return multiples;
}

/*********************************** the best solution ***********************************/
function multiples(m, n){
  return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

