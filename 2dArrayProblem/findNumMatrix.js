const findNumMatrix = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ((num === arr[i][j])) {
        console.log(i,j);
      }
    }
  }
};

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
findNumMatrix(arr,5)
