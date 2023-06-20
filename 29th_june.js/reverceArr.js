const reverceArr = (arr) => {
  // return arr.reverse()
  // let arr1 = []
  // for(let i=0;i<=arr.length-1;i++){
  //     arr1.unshift(arr[i])
  //  }
  // for(let i=arr.length-1;i>=0;i--){
  //    arr1.push(arr[i])
  // }
  return arr.length < 2 ? arr : [arr.pop()].concat(reverceArr(arr));
};
console.log(reverceArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
