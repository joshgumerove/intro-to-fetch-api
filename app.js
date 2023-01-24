let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((res) => res.json()) // json() method is given to us by the browser (is asynchronous / returns a promise)
  .then((data) => {
    return dataToHTML(data);
  });

function dataToHTML(data) {
  const title = data.title;
  const body = document.getElementById("wrapper");
  body.innerHTML = `<h1>${title}</h1>`;
}

// all API endpoints will have their own rules (may need to pass in headers to the fetch API)

let dadJokeURL = "https://icanhazdadjoke.com/";

const dadJokeHeaders = {
  Accept: "application/json",
}; // this header is needed as specified in the documentation

fetch(dadJokeURL, { headers: dadJokeHeaders })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .then(({ joke }) => console.log(joke));
