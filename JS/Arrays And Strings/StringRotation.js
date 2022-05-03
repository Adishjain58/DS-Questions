/*
String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring 
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

console.log(stringRotation("waterbottle", "brottlewate"));
