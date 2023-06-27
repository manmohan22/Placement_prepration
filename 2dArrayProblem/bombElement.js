const bombElement = (arr) => {
  arr.map((element, index) => {
    element.map((nestedEle, nestedIndex) => {
      // left side
      if (nestedEle == -1) {
        console.log(element[nestedIndex - 1] + 1);
      }
      // right side
      if (nestedEle == -1 && nestedIndex !== 2) {
        console.log(element[nestedIndex + 1] + 1);
      }
    //   console.log(element);
    });
  });
};

let matrix = [
  [2, -1, 5],
  [-1, 4, 6],
  [5, 6, -1],
];

bombElement(matrix);
