# Criando Arquivos

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

/*
  CRIANDO ARQUIVO, SE HOUVER UM ERRO, MOSTRE O ERRO.
  fs.writeFile('danki.md', 'teste dankicode', (err) => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
  })

  CRIA NOVO ARQUIVO OU INSERE O CONTEÚDO DEPOIS DO QUE JÁ EXISTE
  fs.appendFile('danki.md', 'Outro conteúdo', (err) => {
    if (err) throw err;
    console.log('Arquivo criado ou editado com sucesso!');
  })
*/

const server = http.createServer((req, res) => {
  if (req.url == '/teste') {
    fs.readFile('index.html', (err, data) => {

      fs.appendFile('danki.md', 'Outro conteúdo', (err) => {
        if (err) throw err;
        console.log('Arquivo criado ou editado com sucesso!');
      });

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