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
