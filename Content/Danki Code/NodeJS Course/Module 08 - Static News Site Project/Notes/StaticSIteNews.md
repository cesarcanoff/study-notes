# Desenvolvendo Portal

```jsx
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/', (req, res) => {
  if (req.query.search == null) {
    res.render('home', {});
  } else {
    res.render('busca', {});
  }
});

app.get('/:slug', (req, res) => {
  res.render('single', {});
});

app.listen(5000, () => {
  console.log('Running...');
});
```

```html
<%- include('partials/header.html') %>
<section class="noticia-destaque">
  <div class="center">
    <div class="img-destaque">
      <div class="overlay"></div>
      <div class="title-destaque-descricao">
        <h2>Quer Fugir das Praias de Verão?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          veritatis aliquam explicabo.
        </p>
      </div>
      <img src="../public/images/landscape.jpeg" alt="Paisagem com pedras e Árvores" />
    </div>
  </div>
</section>

<section class="outras-noticias">
  <div class="title-outras-noticias">
    <h2 class="title-section">Últimas Notícias</h2>
    <div class="center">
      <div class="ultimas">
        <div class="box-ultima-single">
          <img src="../public/images/news.png" />
          <div class="conteudo-noticia-single">
            <h3>Natureza e Geral</h3>
            <h2>Como encarar o Surf em Floripa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore ipsam laudantium necessitatibus quibusdam distinctio
            </p>
            <a href="/encarar-o-surf">Saiba Mais</a>
          </div>
        </div>
        <div class="box-ultima-single">
          <img src="../public/images/news.png" />
          <div class="conteudo-noticia-single">
            <h3>Natureza e Geral</h3>
            <h2>Como encarar o Surf em Floripa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore ipsam laudantium necessitatibus quibusdam distinctio
            </p>
            <a href="/encarar-o-surf">Saiba Mais</a>
          </div>
        </div>
      </div>
      <div class="mais-lidas">
        <h3>Mais lidas</h3>
        <div class="mais-lidas-noticias">
          <div class="mais-lida-noticia-single">
            <img src="../public/images/banner.png" />
            <div class="texto-mais-lida-single">
              <h4>Natureza</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, facere illum deserunt veritatis.
              </p>
              <a href="/encarar-o-surf">Saiba Mais</a>
            </div>
          </div>
          <div class="mais-lida-noticia-single">
            <img src="../public/images/banner.png" />
            <div class="texto-mais-lida-single">
              <h4>Natureza</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, facere illum deserunt veritatis.
              </p>
              <a href="/encarar-o-surf">Saiba Mais</a>
            </div>
          </div>
          <div class="mais-lida-noticia-single">
            <img src="../public/images/banner.png" />
            <div class="texto-mais-lida-single">
              <h4>Natureza</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, facere illum deserunt veritatis.
              </p>
              <a href="/encarar-o-surf">Saiba Mais</a>
            </div>
          </div>
          <div class="mais-lida-noticia-single">
            <img src="../public/images/banner.png" />
            <div class="texto-mais-lida-single">
              <h4>Natureza</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, facere illum deserunt veritatis.
              </p>
              <a href="/encarar-o-surf">Saiba Mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<%- include('partials/footer.html') %>
</body>

</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

html,
body {
  height: 100vh;
}

header {
  padding: 8px 0;
  background-color: #0aacdc;
  text-align: center;
}

.center {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
}

.logo {
  width: 50%;
}

.logo a {
  color: #fff;
  text-decoration: none;
}

span {
  font-weight: 300;
}

.form-busca {
  width: 50%;
  text-align: right;
}

.form-busca form {
  display: inline-block;
  max-width: 200px;
  position: relative;
}

.form-busca i {
  position: absolute;
  left: 10px;
  top: 9px;
  color: #fff;
  font-size: 20px;
}

.form-busca input {
  height: 40px;
  border: 0;
  width: 100%;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  background-color: #067799;
  padding-left: 40px;
}

.form-busca input:focus {
  outline: none;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 1;
}

:-ms-input-placeholder:placeholder {
  /* IE 10-11 */
  color: #fff;
  opacity: 1;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #fff;
  opacity: 1;
}

section.noticia-destaque {
  padding: 40px 0;
}

section.noticia-destaque > .center {
  max-width: 960px;
}

.img-destaque {
  width: 100%;
  border-radius: 10px;
  position: relative;
}

.img-destaque img {
  width: 100%;
  border-radius: 10px;
}

.title-destaque-descricao {
  position: absolute;
  bottom: 10%;
  left: 0;
  padding: 10px 35px;
  max-width: 600px;
  z-index: 2;
  color: #fff;
}

.title-destaque-descricao h2 {
  font-size: 2.7rem;
  width: 70%;
  font-weight: 900;
  margin-bottom: 20px;
}

.title-destaque-descricao p {
  font-size: 20px;
  color: #ebe9e9;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

section.outras-noticias {
  background-color: #eaeaea;
  padding: 40px 5px;
  text-align: center;
}

section.outras-noticias h2.title-section {
  font-size: 2em;
  margin-bottom: 20px;
}

.ultimas {
  width: 60%;
  height: 60%;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
}

.box-ultima-single {
  text-align: left;
  width: 48%;
  height: 100%;
  margin-right: 1%;
  background-color: #fff;
  border-radius: 10px;
}

.box-ultima-single img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.box-ultima-single h3 {
  color: #33439b;
  font-size: 16px;
  margin: 20px 0;
}

.box-ultima-single h2 {
  color: #303336;
  font-size: 1.3em;
}

.box-ultima-single p {
  color: #7b8591;
  font-size: 0.9em;
  margin: 20px 0;
}

.box-ultima-single a {
  width: 100px;
  height: 40px;
  padding: 5px;
  border: 1px solid #ebebeb;
  text-decoration: none;
  color: #0aacdc;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
}

.conteudo-noticia-single {
  padding: 20px;
}

.mais-lidas {
  width: 40%;
  height: 100%;
  background-color: #fff;
}

.mais-lidas h3 {
  background-color: #3f51b5;
  color: #fff;
  text-align: center;
  padding: 10px 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.mais-lida-noticia-single {
  display: flex;
  padding: 20px;
  text-align: left;
}

.mais-lida-noticia-single img {
  width: 30%;
}

.mais-lida-noticia-single .texto-mais-lida-single {
  width: 70%;
  padding: 8px 10px;
}

.texto-mais-lida-single h4 {
  color: #40be65;
  letter-spacing: 3.2px;
}

.texto-mais-lida-single p {
  font-size: 0.9em;
  color: #7b8591;
}

.texto-mais-lida-single a {
  width: 100px;
  height: 40px;
  display: block;
  padding: 5px;
  border: 1px solid #ebebeb;
  text-decoration: none;
  color: #0aacdc;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
  margin-top: 5px;
}

footer {
  text-align: center;
  padding: 10px 0;
  background-color: #0aacdc;
}

footer p {
  color: #fff;
  font-weight: bold;
}

section.noticia {
  padding: 20px 0;
  background-color: #eaeaea;
}

.noticia-single {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: 58%;
  margin-right: 2%;
}

.noticia-single h2 {
  color: #303336;
  font-size: 42px;
  margin: 10px 0;
}
.noticia-single span {
  letter-spacing: 3.2px;
  text-transform: uppercase;
  font-size: 13px;
  color: #858585;
  font-weight: bold;
}

.noticia-single p {
  color: #7b8591;
  font-size: 15px;
  line-height: 26px;
  margin-top: 15px;
}

.noticia-single h3 {
  color: #7b8591;
  font-size: 33px;
  margin: 10px 0;
}

@media screen and (max-width: 768px) {
  .noticia-single {
    width: 100%;
    margin-bottom: 20px;
  }
  .logo {
    text-align: center;
  }
  .logo,
  .form-busca {
    width: 100%;
  }
  .form-busca {
    text-align: center;
    margin-top: 10px;
  }

  .title-destaque-descricao h2 {
    font-size: 34px;
    margin: 20px 0;
  }

  .mais-lidas,
  .ultimas {
    width: 100%;
    margin-bottom: 20px;
  }

  .box-ultima-single {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
```