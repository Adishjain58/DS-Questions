/**
 * Question is we need to check if 2 arrays are equal and any index of array can have any level of nested array;
 */

const areArrayequal = (arr1, arr2) => {
  // if length of both arrays is not equal then in that case simply return false;
  if (arr1.length != arr2.length) {
    return false;
  }

  // if both arrays are equal that means same array was passed twice and simply return true
  if (arr1 == arr2) {
    return true;
  }

  // iterate until length of either of arrays as at this point we will only come if both arrays have same length
  for (let i = 0; i < arr1.length; i++) {
    // if both the elements at ith index are array then pass those indexes and call the function recursively.
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // get the result of recursive call
      let res = areArrayequal(arr1[i], arr2[i]);
      // if false is returned then simply return false so that further elements of array won't be checked.
      if (!res) {
        return false;
      }
    }
    // if only one element at ith index is an array then return false.
    else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      return false;
    }
    // if the element at ith index is not array and elements of both arrays are not equal then return false.
    else if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  // if the function was not returned until this point then it means our arrays are same.
  return true;
};

let arr1 = [1, 2, [1, 2, [1, 2, [1, 2, [1, 2]]]], 4, 5, 6, [[[[[[[]]]]]]]];
let arr2 = [1, 2, [1, 2, [1, 2, [1, 2, [1, 2]]]], 4, 5, 6, [[[[[[[1]]]]]]]];

console.log(areArrayequal(arr1, arr2));
