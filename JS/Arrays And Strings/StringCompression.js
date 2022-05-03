/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the original string, your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a - z).
*/
/*
    Idea is that we will start iterating though 1st index and we will have a count variable to keep track of how many same elements we have encountered,
    if we encounter a diff element then we will append the previous character and count's current value to new string that we are creating and then set count back to 1.
    We are starting with count as 1 because we are starting the loop from 1st index, in this case 1st element would have come 1 times.
*/
const stringCompression = (str) => {
  let count = 1;
  let res = "";
  for (let i = 1; i < str.length; i++) {
    // if the current character is not equal to it's previous character then that means we need to reset our count to 1 because
    // we need to count the current element as well.
    if (str[i] != str[i - 1]) {
      // append the previous character to the result string.
      res += str[i - 1];
      // append the count also to result string.
      res += count;
      // reset count to 1.
      count = 1;
    }
    // if the current element is same as previous element then simply increase the count
    else {
      count++;
    }
  }
  // because we are only appending the previous element when the current and current-1 element is not equal, the last element and it's count won't be appended
  // to the result string, that's why appending last character and it's count
  res += str[str.length - 1];
  res += count;
  return res.length < str.length ? res : str;
};

console.log(stringCompression("aabcccccaaa"));
