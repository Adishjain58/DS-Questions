/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
 You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

/*
 The questions where it is told to find every possible combination, are generally solved using backtracking.
 When using backtracking it is generally preferable to create a new function where all the data is passed and one argument should be a blank array, string or object depending
 upon the question, so that when we return something from the recursive function, we could reach all states until everything is finished.
*/

// Note :- for state diagram to know how backtracking is working refer to CombinationSum.jpeg in the same folder.

/**
 * Function which return a 2-d array will all the combination whose sum is equal to a specific number provided.
 * @param {*} arr
 * @param {*} target
 * @returns a 2-d array with all the combinations.
 */
const combinationSum = (arr, target) => {
  // array to store all the arrays of combinations
  let res = [];
  // sort the array in ascending order so that we will have to do less no of iterations because if for a number the sum of combinations is greater than the target
  // then all the numbers after that will also have greater sum;
  arr.sort((a, b) => a - b);
  // function which will perform backtracking and return us all the combinations
  backTrack(res, arr, 0, target, []);
  return res;
};

/**
 * Fuynction which will perform backtracking and return all the combinations
 * @param {*} res array where all the combinations will be stored.
 * @param {*} arr input array which we have to use to find sum of combinations.
 * @param {*} start index from where we will start iterating
 * @param {*} remain variable which will be used to determine whether our combination is valid or not.
 * @param {*} tempArr a temperary array, initially which will be blank and will be used for backtracking.
 * @returns
 */
const backTrack = (res, arr, start, remain, tempArr) => {
  // if remain < 0 then that means the number we are considering is greater than required, hence return and backtrack to the previous state.
  if (remain < 0) {
    return;
  }
  // if remain == 0 that means we found our valid combination.
  if (remain == 0) {
    // when a valid combination is found add the tempArr to our result array and make sure to clone the temp array because array is passed using reference.
    res.push([...tempArr]);
    return;
  }
  // if none of the conditions are met, then we need to process our input
  else {
    // start the loop from the start index until the length of input array and element at a specific index <= remain
    for (let i = start; i < arr.length && arr[i] <= remain; i++) {
      // for each iteartion add the current index element into our temp array.
      tempArr.push(arr[i]);
      // call the function recursively
      // for the start index pass i as we can use an element multiple times and for remain subtract current array element from remain.
      backTrack(res, arr, i, remain - arr[i], tempArr);
      // once the recursive call is finished we will remove the last element from array as the function is only returned in case we found our combination
      // or the number is not part of combination. At this step backtracking will happen and our temp array should return to it's prevous state
      tempArr.pop();
    }
  }
};

let arr = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(arr, target));
