# Criando Servido Node, Módulo HTTP e Mais

```jsx
{
  "name": "workspace",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

```jsx
const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello, World!');
});

server.listen(port, hostName, () => {
  console.log('Server Running...');
})
```