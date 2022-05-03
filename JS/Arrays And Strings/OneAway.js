/*
One Away: There are three types of edits that can be performed on strings: insert a character, 
remove a character, or replace a character. Given two strings, write a function to check if they are 
one edit (or zero edits) away
*/

/*
    Idea is to create an object which will store how many times a character is repeated in both strings, we will use a single object.
    In case of first string if the character is not present in object then we will set it's value to 1 else increase the value of the character by 1.
    But in case of second string if the character is not present in onject then we will set it's value to -1 else decrease the value of characrer by -1.
    Reason for this is that it will help us find out how many unique characters are there in both of the strings.
    After creating the object we will find the total sum of characacters count where value is +ve and total sum of characters count where value is -ve.
    Reason for finding total count for both +ve and -ve is that, if any of these sums > 1 then that means we will have to make more than 1 change to make them equal.
*/
const oneAway = (str1, str2) => {
  if (str1 == str2) {
    return true;
  }
  let obj = {};
  // for first string creating object with data where key will be character and value will be how many times a character is repeated.
  for (let i of str1) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  // for second string if the character is present in obj then decrease it's value by 1 else set it's value to -1.
  for (let i of str2) {
    if (obj[i]) {
      obj[i] = obj[i] - 1;
    } else {
      obj[i] = -1;
    }
  }

  // variable to store the sum of characters count where value is +ve;
  let countPositive = 0;
  // variable to store the sum of characters count where value is -ve;
  let countNegative = 0;
  // itearting through object to find the sums for +ve and -ve counts.
  for (let i in obj) {
    if (obj[i] > 0) {
      countPositive += obj[i];
    } else if (obj[i] < 0) {
      countNegative -= obj[i];
    }
  }

  // if any of the count is greater than 1 then return false.
  if (countNegative > 1 || countPositive > 1) {
    return false;
  }

  return true;
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "palez"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "pakes"));
