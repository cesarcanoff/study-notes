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
