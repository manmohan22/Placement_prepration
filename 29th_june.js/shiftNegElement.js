const shiftNegElement = (arr) => {
  let minArr = [];
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minArr.push(arr[i]);
    } else {
      maxArr.push(arr[i]);
    }
  }
//   console.log(minArr,maxArr)
  return maxArr.concat(minArr);
};

let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
console.log(shiftNegElement(arr));


function posStart_NegEnd(arr){
    if(arr.length === 0) return arr;
    let posPointer = 0;
    let negPointer = arr.length - 1;
    while(posPointer !== negPointer){
        if(arr[posPointer] >= 0) posPointer++;
        if(arr[negPointer] < 0) negPointer--;
        if(posPointer >= negPointer) break;
        if(arr[posPointer] < 0 && arr[negPointer] >= 0){
            [arr[posPointer], arr[negPointer]] = [arr[negPointer], arr[posPointer]] //swap
        }
    }
    return arr;
 }