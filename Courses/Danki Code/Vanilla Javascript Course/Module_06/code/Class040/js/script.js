// REQUISIÇÕES COM FETCH
// https://jsonplaceholder.typicode.com/todos/1
fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Danki Code',
    body: 'CONTEÚDO NORMAL',
    userId: 10
  }),
  headers: {
    'Content-Type':'application/json; charset=UTF-8'
  }
})
.then(response => response.json())
.then(json => console.log(json));