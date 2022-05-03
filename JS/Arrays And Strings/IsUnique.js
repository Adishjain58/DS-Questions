// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
const isUniqueObj = (str) => {
  // idea is that we will count how many times each character is coming and store it in object.
  // then we will iterate through created object and if any character is coming more than once than that means all characters are not unique and return false.
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  // Note in js if we use loop like below then we will get all the keys in i, whereas in case of arrays we will get index in i.
  // in js we can iterate in strings using below loop as well, they work same as in case of array, if using in then i will have index and if using of then i will have each index value
  for (let i in obj) {
    if (obj[i] > 1) {
      return false;
    }
  }
  return true;
};

const isUniqueWithoutExtraSpace = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUniqueObj("tes234"));
console.log(isUniqueWithoutExtraSpace("tes123"));
