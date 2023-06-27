let num = 5;
const pureFunction = (num1, num2) => {
  return num1 + num2;
};
console.log(pureFunction(num, 4));
console.log(pureFunction(4, num));

let flag = 0;
function incrementflag() {
	flag++;
}
incrementflag();
console.log(flag);

incrementflag();
console.log(flag);

incrementflag();
console.log(flag);

incrementflag();
console.log(flag);