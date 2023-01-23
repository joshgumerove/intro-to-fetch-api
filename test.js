// synchronous

// const multiplyResult = multiply(5, 10);
// console.log(multiplyResult); // would expect to display 50

// asynchronous

// const bannerPhoto = downloadBanner("serverURL"); // probably would be done using fetch()
// console.log(bannerPhoto); // will return undefined

// fetch("https://openlibrary.org/works/OL45804W.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data.subjects);
//   });

//  a promise can be wrapped around any function, but usually want to use an asyrnchronous function

const firstPromise = new Promise((resolve, reject) => {
  const animal = "warthog";
  // resolve(animal); resolving like this is not asynchronous
  // reject("there was an error with this type of animal retrieval");
  setTimeout(() => {
    resolve(animal);
  }, 3000);
});

firstPromise
  .then((animal) => {
    console.log(animal);
    console.log("promise is done");
    return animal;
  })
  .then((resp) => {
    console.log("in another then statement");
    console.log(resp);
  })
  .catch((err) => console.log(`error: ${err}`));

// if resolve() is called, then the then() method will run
