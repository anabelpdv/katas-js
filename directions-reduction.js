/****************************************************************************************
 * https://www.codewars.com/kata/550f22f4d758534c1100025a
 * Task:
 * Write a function dirReduc which will take an array of strings and returns an array of 
 * strings with the needless directions removed (W<->E or S<->N side by side).
 * Examples:
 * In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and 
 * coming back right away. What a waste of time! Better to do nothing.
 * The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, 
 * the final result is [].
 * In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly
 * opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the 
 * whole path is reducible to ["WEST", "WEST"].
/*****************************************************************************************/


/*************************************** my solution *************************************/
function dirReduc(array){
  let newArray = [];
    while(array.length > 0){
        if(newArray.length === 0 && array.length !== 0){
            newArray.push(array[0]);
            array.shift(); 
          }
        if(array[0] === "NORTH" && newArray[newArray.length - 1] === "SOUTH"){
          array.shift();
          newArray.pop();                     
        }else if (array[0] === "SOUTH" && newArray[newArray.length - 1] === "NORTH"){
          array.shift();
          newArray.pop();                     
        }else if(array[0] === "EAST" && newArray[newArray.length - 1] === "WEST"){
          array.shift();
          newArray.pop();                     
        }else if(array[0] === "WEST" && newArray[newArray.length - 1] === "EAST"){
          array.shift();
          newArray.pop();                     
        }else{
          if(array.length !== 0){
          newArray.push(array[0]);
          array.shift();
          }
        }
    }
  return newArray;
}

 /*********************************** the best solution **************************************
  * dirs is the newly created array on the first iteration is [] as indicated by the initial value passed onto reduce
  * dir is the current element from the original array
  * reduce returns an array instead of a single value
  *******************************************************************************************/

["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){ 
    
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}