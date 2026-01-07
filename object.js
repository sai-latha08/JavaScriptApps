//objects in js
const movieinfo = {
  movie: "hiinanna",
  heroname: "nani",
  heroinename: "mrunalthakur",
};

//How to get property
console.log(movieinfo.heroname);
console.log(movieinfo["heroinename"]); //accesser

//for in
for (let info in movieinfo) {
  console.log(movieinfo[info]);
}

//Advanced object methods-ES6+
//Object.keys
Object.keys(movieinfo).forEach((key) => {
  console.log(key);
});

//to get only - values-Object.values
Object.values(movieinfo).forEach((value) => {
  console.log(value);
});

//To get both keys and values - Object.entries
Object.entries(movieinfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});

//for of
for (let [info, infovalue] of Object.entries(movieinfo)) {
  console.log(info + " " + infovalue);
}

// I need to explore more about objects
//nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);

//cart objects
const order = {
  products: [
    { pid: 1001, pname: "drone", price: 2000 },
    { pid: 1002, pname: "AC", price: 30000 },
  ],
  shippingaddress: { street: "vadlamudi", dist: "guntur", pincode: 522213 },
  userinfo: { uid: 1204, uname: "Hyma" },
};
console.log(order.userinfo.uname);
