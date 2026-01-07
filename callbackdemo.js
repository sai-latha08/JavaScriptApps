//Callback function with synchronous 
console.log("hello");
let prices = [20000, 30000, 60000, 90000];
let newprices = prices.filter((val) => {   //callback function - a function logic within the function is known as callback function
    return val > 20000;
});
console.log(newprices);
console.log("hello")

