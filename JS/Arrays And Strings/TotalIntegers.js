let totalNoOfIntegers = 0;
const totalIntegers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      totalNoOfIntegers++;
    } else if (Array.isArray(arr[i])) {
      totalIntegers(arr[i]);
    }
  }
  return totalNoOfIntegers;
};

console.log(
  totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6], [7, 8, "test"]]])
);
