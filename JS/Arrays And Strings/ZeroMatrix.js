/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
column are set to 0.
*/
/*
    Idea here is that we will make a copy of the given 2d array, then we will iterate through this array and whenever we find an element whose value is 0,
    we will set all values of it's respective row and column to 0 in the copied array, because if we will modify in the same array then eventually whole array will become
    zero, reson for that is that as we are changing whole row and column to 0 then we will encounter more elements which are zero and again we will set whole row and columns to 
    zero, which will eventually make whole 2d array 0.
    Time Complexity O(n^3)
*/
const zeroMatrixNaive = (arr) => {
  let res = [];
  // to make copy of given array.
  for (let i = 0; i < arr.length; i++) {
    let rowArray = [];
    for (let j = 0; j < arr[i].length; j++) {
      rowArray.push(arr[i][j]);
    }
    res.push(rowArray);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // whenever we encounter an element which is zero, set whole row and column to 0.
      if (arr[i][j] == 0) {
        setRowZeroes(res, i);
        setColumnZeroes(res, j);
      }
    }
  }
  return res;
};

/*
    Idea here is that first we will find out if 0th row and 0th column contains a zero or not, so that at the end we can change them to 0.
    The reason why we are not changing whole row and column to 0 is because we will use indexes of 0th row and 0th column to find out which 
    other row or column has an element which is equal to zero by changing the values of respective indexes to 0.
    Once it's done, we will iterate through 0th row and whereever we encounter a 0 element we will change whole column values to 0.
    In the same way we will do for the 0th column and change whole rows values to 0 whenever we encounter a 0.
    Finally if we had 0 in first row or column then we will change all values of these to 0 as well.
    Time Complexity O(n^2)
*/
const zeroMatrixOptimized = (arr) => {
  let isRowContainsZero;
  let isColumnContainsZero;
  // to find if 0th column contains a zero element.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 0) {
      isColumnContainsZero = true;
      break;
    }
  }

  // to find of 0th row contains a zero ekement.
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] == 0) {
      isRowContainsZero = true;
      break;
    }
  }

  // if arr[i][j] is equal to 0 then change value at [i][0] and [0][j] index to 0.
  // so that lateron we will iterate through this 0th row and column and if an element is 0 then we can change whole
  // row or column to 0.
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        arr[i][0] = 0;
        arr[0][j] = 0;
      }
    }
  }

  // iterate through 0th column and if an element is 0 then change that whole row to 0.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] == 0) {
      setRowZeroes(arr, i);
    }
  }

  // iterate through 0th row and if an element is 0 then change that whole column to 0.
  for (let i = 1; i < arr[0].length; i++) {
    if (arr[0][i] == 0) {
      setColumnZeroes(arr, i);
    }
  }
  // if 0th column had a 0 element then change this whole row to 0.
  if (isColumnContainsZero) {
    setRowZeroes(arr, 0);
  }

  // if the 0th row had a 0 element then change this whole column to 0.
  if (isRowContainsZero) {
    setColumn(arr, 0);
  }

  return arr;
};

// function to set all the values of given row to 0.
const setRowZeroes = (arr, row) => {
  for (let i = 0; i < arr[row].length; i++) {
    arr[row][i] = 0;
  }
};

// function to set all the values of given column to 0.
const setColumnZeroes = (arr, column) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i][column] = 0;
  }
};

// Note:- One more solution is there if we have 2 arrays one to store which row has 0 element and one to store which column has 0 element.

console.log(
  zeroMatrixNaive([
    [1, 2, 3, 4],
    [1, 0, 3, 4],
    [2, 5, 0, 7],
    [4, 5, 6, 7],
  ])
);

console.log(
  zeroMatrixOptimized([
    [1, 2, 3, 4],
    [1, 0, 3, 4],
    [2, 5, 0, 7],
    [4, 5, 6, 7],
  ])
);
