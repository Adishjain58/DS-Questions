/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/*
    Idea here is that we will have a new final array and for each row of matrix we will create a new array and once iteration on each row is complete we will
    push this new array into our final array.
    As for how we will insert elements into this new array that we are creating for each row, if we are iterating on ith row then for each index of this row
    we will add arr[j][i] element in the rowArray where j will start from length-1 of row to 0.
*/
const rotateMatrixWithExtraSpace = (arr) => {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let rowArray = [];
    for (let j = len - 1; j >= 0; j--) {
      rowArray.push(arr[j][i]);
    }
    res.push(rowArray);
  }

  return res;
};

/*
    if we need to do inplace rotation by 90* then first we need to find the transpose of the matrix and then find inverse of the matrix.
    Transpose means changing row elements to column and only diagonal elements will remain same.
    Inverse means we will reverse elements of each row.
*/
const rotateMatrixInPlace = (arr) => {
  transpose(arr);
  inverse(arr);
  return arr;
};

// Function to find the transpose of the matrix.
const transpose = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i; j < arr[i].length; j++) {
      if (i != j) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
  }
};

// Function to find the inverse of the matrix.
const inverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i].length - 1;
    for (let j = 0; j < Math.floor(arr.length / 2); j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][n];
      arr[i][n] = temp;
      n--;
    }
  }
};

console.log(
  rotateMatrixWithExtraSpace([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  rotateMatrixInPlace([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
