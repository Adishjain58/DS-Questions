// first round

// diff between == and ===

// add(1)(2)(3);

const add = (num1) => {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
};

console.log(add(1)(2)(3));

var x = 10;
for (var i = 0; i < 100; i++) {
  var x = 17;
}

console.log(x);
console.log(i);

console.log(2 + "2" - 5);
console.log(2 - "2" + 8);
console.log("true" == true);

var a = 2;

function callMe() {
  console.log(a);
  var a = 10;
}

// follow up what happens if var is replaced with let

callMe3(); // because it's a functional expression
const callme3 = () => {
  console.log("test");
};

let obj1 = { name: "test" };
let obj2 = { name: "test" };
console.log(obj1 === obj2);
console.log(obj1.name === obj2.name);

let obj3 = obj1;
obj1.email = "test@gmail.com";
obj3.test = "test";

console.log(obj3);
console.log(obj1);

setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 100);

/*
Write the definition of the function moveZeroes 
const moveZeroes = (arr) => { // Enter your code here return OUTPUT; } 
    moveZeroes ([‘a’, 0, 1, 2, 0, ‘b’]); // Prints => [‘a’, 1, 2, ‘b’, 0, 0] 
    moveZeroes ([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // Prints => [1, 2, 1, 1, 3, 1, 0, 0, 0] 
    moveZeroes ([false, true, 1, 2, 0, 3, 0, ‘zero’]); // Prints => [false, true, 1, 2, 3, ‘zero’, 0, 0]
*/

const moveZeroes = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
};

moveZeroes(["a", 0, 1, 2, 0, "b"]); // Prints => [‘a’, 1, 2, ‘b’, 0, 0]
moveZeroes([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // Prints => [1, 2, 1, 1, 3, 1, 0, 0, 0]
moveZeroes([false, true, 1, 2, 0, 3, 0, "zero"]); // Prints => [false, true, 1, 2, 3, ‘zero’, 0, 0]

// for 2nd round

var x = 10;
for (var i = 0; i < 100; i++) {
  var x = 17;
}

console.log(x);
console.log(i);

// let x = 10;
// for (let i = 0; i < 100; i++) {
//   let x = 17;
// }

// console.log(x);
// console.log(i);

setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 100);

console.log(2 + "2" - 5);
console.log(2 - "2" + 8);
console.log("true" == true);

// let obj1 = { name: "test" };
// let obj2 = { name: "test" };
// console.log(obj1 === obj2);
// console.log(obj1.name === obj2.name);

// let obj3 = obj1;
// obj1.email = "test@gmail.com";
// obj3.test = "test";

// console.log(obj3);
// console.log(obj1);

//What will be stored at index = 1 for the array => [1, , 3]

/*
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing .
    Third argument is what you will be replacing the second argument with.

    Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

    myReplace("Let us go to the store", "store", "Mall"); Let us go to the mall
    myReplace("Let us get back to more Coding", "Coding", "algorithms"); Let us get back to more Algorithms
    myReplace("Let us get back to more Coding", "more", "less"); Let us get back to less Coding
    */

// const myReplace = (str, before, after) => {
//   const isUpperCase = before[0] === before[0].toUpperCase();

//   return str
//     .split(" ")
//     .map((word) => {
//       if (word === before) {
//         if (isUpperCase) {
//           word = after[0].toUpperCase() + after.substring(1, after.length);
//         } else {
//           word = after[0].toLowerCase() + after.substring(1, after.length);
//         }
//       }
//       return word;
//     })
//     .join(" ");
// };

const myReplace = (str, stringToReplace, replaceWith) => {
  const isUpperCase = stringToReplace[0] === stringToReplace[0].toUpperCase();

  str = str.split(" ");
  let index;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === stringToReplace) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    replaceWith = replaceWith.split("");
    replaceWith[0] = isUpperCase
      ? replaceWith[0].toUpperCase()
      : replaceWith[0].toLowerCase();
    str[index] = replaceWith.join("");
  }

  return str.join(" ");
};

console.log(myReplace("Let us go to the store", "store", "Mall"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
console.log(myReplace("Let us get back to more Coding", "more", "less"));

const multiply = (...args) => {
  if (args.length >= 2) {
    return args[0] * args[1];
  } else {
    let num = args[0];
    return function (num2) {
      return num * num2;
    };
  }
};

console.log(multiply(4, 5));
let double = multiply(2);
console.log(double(5));
console.log(double(11));
