/*
String Rotation:Assume you have a method isSubstring which checks if oneword is a substring 
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one 
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
*/

const stringRotation = (str1, str2) => {
  let indexes = [];
  let index = 0;
  let char = str1[0];
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == char) {
      indexes[index++] = i;
    }
  }
  for (let i = 0; i < indexes.length; i++) {
    let isRotation = true;
    let indexToStart = indexes[i];
    for (let j = 0; j < str1.length; j++) {
      if (str1[j] != str2[indexToStart++ % str2.length]) {
        isRotation = false;
      }
    }
    if (isRotation) {
      return true;
    }
  }

  return false;
};

/* 
  idea is that we will call isSubstring method by repeating the str2 twice so that in between the whole string will be there.
  For e.g. st1 is waterbottle and str2 is erbottlewat now if we will add str2 to str2 then we will have erbottlewaterbottlewat which contains str1 as well
*/
const stringRotation2 = (str1, str2) => {
  return isSubstring(str2 + str2, str1);
};

// methods which tells if str2 is a substring of str1 or not.
const isSubstring = (str1, str2) => {
  let i = 0,
    j = 0,
    match = 1;
  while (i < str1.length && j < str2.length) {
    if (match == str2.length) {
      return true;
    }
    if (str2[j] != str1[i]) {
      i++;
      match = 1;
    } else if (str1[i] == str2[j]) {
      i++;
      j++;
      match++;
    }
  }
  return false;
};

console.log(stringRotation("waterbottle", "bottlewater"));
console.log(stringRotation2("waterbottle", "erbottlewat"));
