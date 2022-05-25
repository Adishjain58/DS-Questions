const distinctNumbers = (num) => {
  let obj = {};
  let res = [];
  let obj2 = {};
  obj[num] = true;
  res.push(num);
  obj2[num] = true;
  for (let i = 1; i < num; i++) {
    if (num % i == 1) {
      res.push(num - i);
      obj2[num - i] = true;
    }
  }
  console.log(obj);
  console.log(res);

  for (let i = 0; i < res.length; i++) {
    console.log(obj, i);
    console.log(res[i]);
    if (!obj[res[i]]) {
      //   obj[res[i]] = true;
      for (let j = 1; j < res[i]; j++) {
        if (res[i] % j == 1) {
          console.log("inside j's if", res[i] % j == 1, j, res);
          if (!obj2[num - j]) {
            res.push(num - j);
            obj2[num - j] = true;
            obj[num - j] = true;
            i = 0;
          }
        }
      }
    }
  }
  console.log(res);

  return Object.keys(obj2).length;
};

console.log("final output ", distinctNumbers(15));
