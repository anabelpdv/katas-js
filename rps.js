/****************************************************************************************
 * https://www.codewars.com/kata/5672a98bdbdd995fad00000f
 * Rock Paper Scissors:
 * You have to return which player won! In case of a draw return Draw!
 * Examples:
 * rps('scissors','paper') // Player 1 won!
 * rps('scissors','rock') // Player 2 won!
 * rps('paper','paper') // Draw!

/*****************************************************************************************/


/***************************************** my solution **************************************/
const rps = (p1, p2) => {
	if (p1 === p2){
	  return "Draw!";
	}
	
	if(p1 === "paper"){
	  if(p2 === "rock"){
	  	return "Player 1 won!";
	  }else{
	  	return "Player 2 won!";
	  }
	  	
	 }
	 
	 if(p1 === "rock"){
	   if(p2 === "scissors"){
	  	return "Player 1 won!";
	  }else{
	  	return "Player 2 won!";
	  }
	  	
	 }
	 
	 if(p1 === "scissors"){
	  if(p2 === "paper"){
	  	return "Player 1 won!";
	  }else{
	  	return "Player 2 won!";
	  }
	  	
    }
};

 /*********************************** the best solution **************************************/
 const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};