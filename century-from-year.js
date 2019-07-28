/****************************************************************************************
 * https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
 * The first century spans from the year 1 up to and including the year 100, 
 * The second - from the year 101 up to and including the year 200, etc.
 * Task:
 * Given a year, return the century it is in.
 * Examples:
 * centuryFromYear(1705)  returns (18)
 * centuryFromYear(1900)  returns (19)
 * centuryFromYear(1601)  returns (17)
 * centuryFromYear(2000)  returns (20)

/*****************************************************************************************/


/***************************************** my solution **************************************/
function century(year) {
  return year % 100 === 0 ? (Math.trunc(year/100)):(Math.trunc(year/100)) + 1;
}

/*********************************** the best solution **************************************/
const century = year => Math.ceil(year/100);