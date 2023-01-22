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
