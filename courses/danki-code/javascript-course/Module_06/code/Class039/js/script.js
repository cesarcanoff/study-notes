// AJAX Tradicional
let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // REQUEST FEITA COM SUCESSO!
    let data = JSON.parse(this.response);
    console.log(data);
  } else {
    // ERROR
  }
}

request.onerror = function () {}

request.send();