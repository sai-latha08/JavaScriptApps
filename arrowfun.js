//arrow function with simple example
function mulNumbers(a, b) {
  return a * b;
}
let result = mulNumbers(4, 5);
console.log(result);
//arrow function simple example
//rest parameters
const printNumbers = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
printNumbers(10, 30, 20, 60, 80, 100, 110); //displays remaining elements

//default parameter
const addNums = (a, b = 20) => {//displays this default paremeter(b) if no parameter is passed
  console.log(a + b);
};
addNums(10, 50);


