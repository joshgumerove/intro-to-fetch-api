// the response object:
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// set-up fectch request

let url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url).then((res) => {
//   console.log(res.body, "here is the stream");
//   console.log(res.headers.get("content-type"));
//   console.log(Array.from(res.headers));
//   console.log(res.json());
// }); // note that the response --> is an object (very important in AJAX)

fetch(url)
  .then((res) => res.json()) // json() method is given to us by the browser (is asynchronous / returns a promise)
  .then((userData) => {
    let title = userData.title;
    let doc = document.getElementById("wrapper");
    doc.innerHTML = `<h1>${title}</h1>`;
  });
