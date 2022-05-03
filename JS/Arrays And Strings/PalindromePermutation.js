/*Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.*/

const palindromePermutation = (str) => {
  // first remove white space and convert string to lower case
  str = str.replace(/[ ]/gi, "").toLowerCase();
  // object where we will store the count of each character
  let obj = {};
  // loop to find count of each character
  for (let i of str) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  // variable to store how many times a character is repeated odd number of times.
  let oddCharactercCount = 0;
  // iterating through ibject
  for (let i in obj) {
    // find out how many times a character is repeating odd number of times.
    if (obj[i] % 2 != 0) {
      oddCharactercCount++;
    }
    // in a palandrome string only one character can repeat odd number of times, if count is more than 1 then the string is not palandrome
    if (oddCharactercCount > 1) {
      return false;
    }
  }

  return true;
};

console.log(palindromePermutation("Tact Coa obbac"));
