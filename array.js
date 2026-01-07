//Arrays in js
let pnames = ["realme", "vivo", "sumsung", "oppo"]; //literal syntax
console.log(pnames[2]);

let prices = new Array(20000, 30000, 50000, 40000); //object syntax
// get all values using for of method
for (let names of pnames) {
  console.log(names);
}

//for each method
let pnames1 = pnames.forEach((val) => {
  console.log(val); //repeats names
}); //called as callback function
//to add values in array
//push method-for end index,unshift-for start index,splice methods-for random index, used to add arrays
pnames.unshift("oneplus");
console.log(pnames);
pnames.splice(2, 0, "redme", "nokia");
console.log(pnames);

//remove operations-pop,shift,splice
pnames.pop(); //remove last element
console.log(pnames);
pnames.shift(); //remove first element
console.log(pnames);
pnames.splice(2, 1); //removes value after index 2
console.log(pnames);
console.log(pnames.slice(2, 4)); //removes inbetween elements
console.log(pnames.slice(-4, -2));

// to sort
prices.reverse();
console.log(prices);

//to update
pnames[2] = "HYMA";
console.log(pnames);

//to concat
let pnames2 = ["windows", "macbook"];
console.log(pnames.concat(pnames2));

//new technique-spread operator
let brands = [...pnames, ...pnames2]; //does concatenation
console.log(brands);

//array advanced method(ES6)-reduce method
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);

//map methods-shows value for certain time in application(ex:prices in shopping apps for festival offers)
let offerPrice = prices.map((val) => {
  return val - 4000;
});
console.log(offerPrice);

//I need to explore more about arrays
