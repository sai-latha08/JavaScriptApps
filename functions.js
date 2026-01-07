//functions in js
function showMsg() {
  console.log("Welcome to js function");
}
showMsg();
//function with parameters
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(10, 20);
//multiplication numbers
function mulNumber(x, y) {
  return x * y;
}
let result = mulNumber(5, 4);
console.log(result);

//new function syntax in ES6 - arrow function
const arrowDemo = () => {
  console.log("This is a arrow function");
};
arrowDemo();

//arrow function with arrow functions
const arrowDemoo = (a, b) => {
  console.log(a + b);
}
arrowDemoo(40, 50);
