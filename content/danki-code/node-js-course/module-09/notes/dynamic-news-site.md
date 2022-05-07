# Projeto Site Notícias Dinâmico

Explicação e apresentação do MongoDB

```jsx
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const Posts = require('./Posts.js')

mongoose
  .connect(
    'mongodb+srv://root:uvPRJ8sd8gD2ajrL@cluster0.w7hyp.mongodb.net/dankicode?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Success Connect')
  })
  .catch(err => {
    console.log(err.message)
  })

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/pages'))

app.get('/', (req, res) => {
  if (req.query.search == null) {
    Posts.find({})
      .sort({ _id: -1 })
      .exec((err, posts) => {
        posts = posts.map(val => {
          return {
            titulo: val.titulo,
            conteudo: val.conteudo,
            descricaoCurta: val.conteudo.substr(0, 100),
            imagem: val.imagem,
            slug: val.slug,
            categoria: val.categoria
          }
        })

        Posts.find({})
          .sort({ views: -1 })
          .limit(3)
          .exec(function (err, postsTop) {
            postsTop = postsTop.map(function (val) {
              return {
                titulo: val.titulo,
                conteudo: val.conteudo,
                descricaoCurta: val.conteudo.substr(0, 100),
                imagem: val.imagem,
                slug: val.slug,
                categoria: val.categoria,
                views: val.views
              }
            })

            res.render('home', { posts: posts, postsTop: postsTop })
          })
      })
  } else {

    Posts.find({titulo: {$regex: req.query.search, $options: 'i'}}, (err, posts) => {
      console.log(posts)
      res.render('busca', {posts: posts, contagem:posts.length})
    })
  }
})

app.get('/:slug', (req, res) => {
  Posts.findOneAndUpdate({ slug: req.params.slug },{ $inc: { views: 1 } },{ new: true },(err, response) => {
      
    if (response != null) {
        
      Posts.find({}).sort({ views: -1 }).limit(3).exec(function (err, postsTop) {
            
        postsTop = postsTop.map(function (val) {
              return {
                titulo: val.titulo,
                conteudo: val.conteudo,
                descricaoCurta: val.conteudo.substr(0, 100),
                imagem: val.imagem,
                slug: val.slug,
                categoria: val.categoria,
                views: val.views
              }
            })
            res.render('single', { noticia: response, postsTop: postsTop })
          })
      } else {
        res.redirect('/');
      }
    }
  )
})

app.listen(3000, () => {
  console.log('Running...')
})
```

```sql
_id
:62564e16a67ffd428f0894be
titulo
:"COmo ser um programador"
imagem
:"https://get.pxhere.com/photo/computer-screen-technology-web-internet-s..."
categoria
:"educação"
conteudo
:"<p>um placeat necessitatibus asperiores debitis atque libero molestiae..."
```

```jsx
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const Posts = require('./Posts.js')

mongoose
  .connect(
    'mongodb+srv://root:uvPRJ8sd8gD2ajrL@cluster0.w7hyp.mongodb.net/dankicode?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Success Connect')
  })
  .catch(err => {
    console.log(err.message)
  })

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/pages'))

app.get('/', (req, res) => {
  if (req.query.search == null) {
    Posts.find({})
      .sort({ _id: -1 })
      .exec((err, posts) => {
        posts = posts.map((val) => {
          return {
            titulo: val.titulo,
            conteudo: val.conteudo,
            descricaoCurta: val.conteudo.substr(0, 100),
            imagem: val.imagem,
            slug: val.slug,
            categoria: val.categoria
          }
        });
        res.render('home', { posts: posts })
      })
  } else {
    res.render('busca', {})
  }
})

app.get('/:slug', (req, res) => {
  res.render('single', {})
})

app.listen(3000, () => {
  console.log('Running...')
})
```

```jsx
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema(
  {
    titulo: String,
    imagem: String,
    categoria: String,
    conteudo: String,
    slug: String
  },
  { collections: 'posts' }
);

var Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;
```

```html
<%- include('partials/header.ejs') %>
<section class="noticia-destaque">
  <div class="center">
    <div class="img-destaque">
      <div class="overlay"></div>
      <div class="title-destaque-descricao">
        <a href="<%= posts[0].slug %>"><h2><%= posts[0].titulo %></h2></a>
        <p>
          <%- posts[0].descricaoCurta %>...
        </p>
      </div>
      <img src="<%= posts[0].imagem %>" alt="Paisagem com pedras e Árvores" />
    </div>
  </div>
</section>

<section class="outras-noticias">
  <div class="title-outras-noticias">
    <h2 class="title-section">Últimas Notícias</h2>
    <div class="center">
      <div class="ultimas">
        <% for(let i = 1; i < posts.length; i++) { %>
        <div class="box-ultima-single">
          <img src="<%= posts[i].imagem %>" />
          <div class="conteudo-noticia-single">
            <h3><%= posts[i].categoria %></h3>
            <h2><%= posts[i].titulo %></h2>
            <p>
              <%- posts[0].descricaoCurta %>...
            </p>
            <a href="<%= posts[i].slug %>">Saiba Mais</a>
          </div>
        </div>
        <% } %>
      </div>
      <div class="mais-lidas">
        <h3>Mais lidas</h3>
        <div class="mais-lidas-noticias">
          <% for(let i = 0; i < posts.length; i++) { %>
          <div class="mais-lida-noticia-single">
            <img src="<%= posts[i].imagem %>" />
            <div class="texto-mais-lida-single">
              <h4><%= posts[i].titulo %></h4>
              <p>
                <%- posts[0].descricaoCurta %>...
              </p>
              <a href="<%= posts[i].slug %>">Saiba Mais</a>
            </div>
          </div>
          <% } %>
        </div>
      </div>
    </div>
  </div>
</section>
<%- include('partials/footer.ejs') %>
</body>

</html>
```