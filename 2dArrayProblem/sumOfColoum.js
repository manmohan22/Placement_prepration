const sumOfColoum = (matrix) => {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[j][i];
    }
    // console.log(sum);
    arr.push(sum);
  }
  return arr;
};
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(sumOfColoum(arr));
