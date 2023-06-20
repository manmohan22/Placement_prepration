const minMaxElement = function (arr) {
  let minVal = arr[0];
  let maxVal = 0;
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    } else if (arr[i] < arr[i + 1]) {
      maxVal = arr[i + 1];
    }
  }
  console.log([minVal, maxVal]);
};
let arr = [110, 220, 330, 40, 550, 660, 370, 280, 190];
minMaxElement(arr);
