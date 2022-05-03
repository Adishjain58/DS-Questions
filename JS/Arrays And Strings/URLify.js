// Write a method to replace all spaces in a string with '%20'.

// one way is to use inbuild replace method, otherwise convert string to array and replace value at index where value ==" " with "%20"
const URLify = (str) => {
  console.log(str.replace(/[ ]/gi, "%20"));

  return str
    .split("")
    .map((val) => (val == " " ? "%20" : val))
    .join("");
};

console.log(URLify("This is test"));
