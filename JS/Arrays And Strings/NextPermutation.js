/*
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

*/

/**
 * Idea is that we will start from the end of the array and if there is any number which is smaller than the previous number, then we need to replace this number to find the
 * next permutation, now to find which number we need to replace, for that again start from end of array and find first element which is greater than the element that we want
 * to replace and replace these both numbers. After replacement reverse all the elements after the elemnent which we initially found.
 * @param {*} arr
 * @returns
 */
const nextPermutation = (arr) => {
  // variable to store the index of number who is smaller to it's previous numbers when iterating through end of the array.
  let index = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    // if element at i-1 is less than element at i then store i-1 value in index variable and break the loop. This element is the one that we need to replace to create
    // next permutation in lexographical order.
    if (arr[i - 1] < arr[i]) {
      index = i - 1;
      break;
    }
  }
  // if the element index >=0 then only we need to swap the elements
  if (index >= 0) {
    let end = arr.length - 1;
    // run loop until we find an element which is greater than the element present at index which is stored in index variable.
    while (end > 0 && arr[end] <= arr[index]) {
      end--;
    }
    // once element is found replace both of those elements.
    swap(arr, index, end);
  }

  // finally reverse all the elements which came after the found index.
  reverse(arr, index + 1);

  return arr;
};

/**
 * Function to swap 2 elements of an array
 * @param {*} arr
 * @param {*} i
 * @param {*} j
 */
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * Function to reverse all elements from given index of an array
 * @param {*} arr
 * @param {*} index
 */
const reverse = (arr, index) => {
  let end = arr.length - 1;
  while (index < end) {
    swap(arr, index, end);
    index++;
    end--;
  }
};

console.log(nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1]));
