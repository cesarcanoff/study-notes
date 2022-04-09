# Ler Arquivos com Base na URL

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
const http = require('http')
const fs = require('fs')

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == '/teste') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    return res.end();
  }
});

server.listen(port, hostName, () => {
  console.log('Server Running...');
});
```