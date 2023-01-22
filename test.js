// synchronous

// const multiplyResult = multiply(5, 10);
// console.log(multiplyResult); // would expect to display 50

// asynchronous

// const bannerPhoto = downloadBanner("serverURL"); // probably would be done using fetch()
// console.log(bannerPhoto); // will return undefined

fetch("https://openlibrary.org/works/OL45804W.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.subjects);
  });

//  a promise can be wrapped around any function, but usually want to use an asyrnchronous function

const firstPromise = new Promise((resolve, reject) => {
  const animal = "warthog";
  resolve(animal);
});

firstPromise.then((res) => console.log(res)); // do not have to change

// if resolve() is called, then the then() method will run
