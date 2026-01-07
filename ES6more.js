//multiline string using backtick(``)
let info = `welcome to IT, 
welcome to Vignan
welcome to mern stack`;
console.log(info);

//string interpolation
let firstname = "HYMA ";
let lastname = "BANDARU";
console.log(`${firstname} ${lastname}`);

//array destructing
let pnames = ["vivo", "oppo", "moto"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);

//object destructing
const movieinfo = {
  moviename: "rajasab",
  heroname: "prabhas",
  directorname: "maruthi",
  heroine: "Nidhi agarwal",
};
let { moviename, heroname, directorname, heroine } = movieinfo;
console.log(moviename);
console.log(heroname);
console.log(directorname);
console.log(heroine);
