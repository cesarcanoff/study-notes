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

var tasks = ['Arrumar o quarto', 'Ir ao supermercado', 'Ir na casa da Julia'];

app.post('/', (req, res) => {
  tasks.push(req.body.task);
  res.render('index', {tasksList : tasks});
})

app.get('/', (req, res) => {
  res.render('index', {tasksList : tasks});
});

app.get('/deletar/:id', (req, res) => {
  tasks = tasks.filter((val, index) => {
    if (index != req.params.id) return val;
  });

  res.render('index', {tasksList : tasks});
});

app.listen(5000, () => {
  console.log('Running...');
});