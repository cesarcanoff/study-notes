# Criando rotas iniciais, configurando views e pasta static

```jsx
const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index', {name: 'César'});
});

app.listen(5000, () => {
  console.log('Running...');
});
```

```html
<html>
  <body>
    <h1>Hello, <%= name %>!</h1>
  </body>
</html>
```