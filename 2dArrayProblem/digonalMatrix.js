const digonalMatrix = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i][j] != 0) {
        return false;
      }
    }
  }
  return true;
};

// console.log(di)
console.log(
  digonalMatrix([
    [1, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 3, 0],
    [0, 0, 0, 4],
  ])
);
