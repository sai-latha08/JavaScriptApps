//callback chaining
const stdetails = () => {
  console.log("studentinfo");
  setTimeout(() => {
    let rollNums = [1, 2, 3, 4];
    console.log(rollNums);
    setTimeout(
      (regdnum) => {
        let data = {
          sname: "HYMA",
          qualification: "BTech",
        };
        console.log(
          `student name is ${data.sname} qualification is ${data.qualification} regdno is ${regdnum}`
        );
      },
      2000,
      rollNums[1]
    );
  }, 2000);
};
stdetails();

//If we implemented with multiple callbacks there may be a callback hell problem
