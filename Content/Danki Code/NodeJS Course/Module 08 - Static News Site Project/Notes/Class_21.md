# Criando rotas básicas e preparando arquivos

```jsx
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  if (req.query.busca == null) {
    res.send('Home');
  } else {
    res.send(`Your search for ${req.query.busca}`);
  }
});

app.get('/:slug', (req, res) => {
  res.send(req.params.slug);
});

app.listen(5000, () => {
  console.log('Running...');
});
```