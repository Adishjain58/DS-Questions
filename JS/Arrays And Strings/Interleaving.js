const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length != s3.length) return false;

  /*
        matrix[i][j] -> true if s1[0..i-1] and s2[0..j-1] interleaves s3[0..i+j-1]
        */
  let matrix = [];
  for (let i = 0; i < s2.length + 1; i++) {
    matrix.push([]);
  }

  /*
        EMPTY s1,s2 can surely interleave to form EMPTY s3
        */
  matrix[0][0] = true;

  /*
        If S2 is empty, then just check whether char in s1 matches with that of s3
        Note: j == 0 here.
   */
  for (let i = 1; i < s2.length + 1; i++) {
    matrix[0][i] = matrix[0][i - 1] && s1[i - 1] == s3[i - 1];
  }

  /*
        If S1 is empty, then just check whether char in s2 matches with that of s3
        Note: i == 0 here.
        */
  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] = matrix[i - 1][0] && s2[i - 1] == s3[i - 1];
  }

  /*
        Now check for both s1,s2 being non empty
        */
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i][j] =
        (matrix[i - 1][j] && s2[i - 1] == s3[i + j - 1]) ||
        (matrix[i][j - 1] && s1[j - 1] == s3[i + j - 1]);
    }
  }

  return matrix[s2.length][s1.length];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
