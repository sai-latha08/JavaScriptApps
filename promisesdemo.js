//It provides easy execution of asychronous
//promises demo
const movieRating = new Promise((resolve, reject) => {
  let rating = 3;
  if (rating > 4) {
    resolve("GOOD MOVIE");
  } else {
    reject("WASTE OF YOUR TIME");
  }
});
//to call promise
movieRating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
