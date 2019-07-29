/****************************************************************************************
 * https://www.codewars.com/kata/587e18b97a25e865530000d8
 * An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters.  
 * An example of this is "angel", which is an anagram of "glean".
 * Task:  
 * Write a function that receives an array of words, and returns the total number of distinct
 * pairs of anagramic words inside it.
 * Examples:
 * There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
 * There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
/*****************************************************************************************/


/*************************************** my solution *************************************/
function anagramCounter (wordsArray) {
   let counter = 0;
    for(let i = 0; i < wordsArray.length; i++){
      for(let j = i + 1; j < wordsArray.length; j++){
          if(isAnagram(wordsArray[i], wordsArray[j])){
            counter++;
          }
      }
    }

  return counter;
}

function isAnagram(word1, word2){
  let array1 = word1.split("");
  let array2 = word2.split("");
  array1.sort().join("");
  return (array1.sort().join("") === array2.sort().join(""))
}

 /*********************************** the best solution **************************************/
 function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex + 1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++;
      }
    }
  })
  return numberOfAnagrams
}