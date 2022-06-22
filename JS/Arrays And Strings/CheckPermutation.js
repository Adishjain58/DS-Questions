//Given two strings, write a method to decide if one is a permutation of the other.
// Note:- A String is called permutation of other if they both have same charcaters but order can be different.
// Idea is that we will find the count of each character in first string and store it in object.
// while iterating through second string if the character is not present in the object then retuen false else decrease count by 1.
// finally if there is any characters in object whose value is not equal to 0 then return false.
const checkPermutation = (str1, str2) => {
  if (str1 == str2) {
    return true;
  }

  let obj = {};

  for (let i of str1) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  for (let i of str2) {
    if (!obj[i]) {
      return false;
    } else {
      obj[i] = obj[i] - 1;
    }
  }

  for (let i in obj) {
    if (obj[i] != 0) {
      return false;
    }
  }
  return true;
};

console.log(checkPermutation("abcd", "cdb"));
