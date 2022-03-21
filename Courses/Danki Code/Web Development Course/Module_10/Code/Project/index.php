<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Descrição do meu site!" />
    <meta name="keywords" content="palavras, chave, por, virgula" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://kit.fontawesome.com/cdfcec8efd.js" crossorigin="anonymous"></script>
    <title>Projeto Prático 01</title>
  </head>

  <body>
    <header>
      <div class="center">
        <div class="logo left">LOGO</div>
        <nav class="desktop right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
        </nav>
        <nav class="mobile right">
          <div class="menu-button-mobile">
            <p><i class="fa-solid fa-bars"></i></p>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
        </nav>
        <div class="clear"></div>
      </div>
    </header>
    <section class="main-banner">
      <div class="overlay"></div>
      <div class="center">
        <form action="POST">
          <h2>Qual o seu melhor e-mail?</h2>
          <input type="email" name="input_email" required />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </section>
    <section class="author-description">
      <div class="center">
        <h2>César Canoff</h2>
        <div class="w50 left">
          <p>
            Molestiae iusto maiores beatae. aboriosam molestiae iusto maiores
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nam, repellat adipisci cumque non quia alias reiciendis officiis
            odio minus magnam eligendi rem culpa laboriosam atque veniam,
            officiis odio minus magnam eligendi rem culpa Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nam repellat adipisci cumque non
            quia alias reiciendis atque veniam.
            Molestiae iusto maiores.
          </p>
          <p>
            Molestiae iusto maiores beatae. aboriosam molestiae iusto maiores
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nam, repellat adipisci cumque non quia alias reiciendis officiis
            odio minus magnam eligendi rem culpa laboriosam atque veniam,
            officiis odio minus magnam eligendi rem culpa Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nam repellat adipisci cumque non
            quia alias reiciendis atque veniam.
            Molestiae iusto maiores.
          </p>
        </div>
        
        <div class="w50 left">
          <img width="400px" class="right" src="images/author_image.png" alt="Picture of Author" />
        </div>
        <div class="clear"></div>
      </div>
    </section>

    <section class="mainSkills">
      <div class="center">
        <h2 class="title">Especialidades</h2>
        <div class="w33 left box-main-skills">
          <h3><i class="fa-brands fa-html5"></i></h3>
          <h4>HTML5</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nesciunt quidem rem voluptates quo veniam conseq uuntur dicta
          </p>
        </div>
        <div class="w33 left box-main-skills">
          <h3><i class="fa-brands fa-css3-alt"></i></h3>
          <h4>CSS3</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nesciunt quidem rem voluptates quo veniam conseq uuntur dicta
          </p>
        </div>
        <div class="w33 left box-main-skills">
          <h3><i class="fa-brands fa-js"></i></h3>
          <h4>Javascript</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nesciunt quidem rem voluptates quo veniam conseq uuntur dicta
          </p>
        </div>
        <div class="clear"></div>
      </div>
    </section>
    <section class="extras">
      <div class="center">
        <div class="w50 left depoimentos-container">
          <h2 class="title">Depoimentos</h2>
          <div class="depoimento-single">
            <p class="depoimento-descricao">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem inventore tempore aliquid soluta fugit perspiciatis
              sed. Fugiat delectus aut itaque, quisquam eaque rerum. Quae
              asperiores tenetur maiores quo ab suscipit?"
            </p>
            <p class="author-name">Lorem Ipsum</p>
          </div>
          <div class="depoimento-single">
            <p class="depoimento-descricao">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem inventore tempore aliquid soluta fugit perspiciatis
              sed. Fugiat delectus aut itaque, quisquam eaque rerum. Quae
              asperiores tenetur maiores quo ab suscipit?"
            </p>
            <p class="author-name">Lorem Ipsum</p>
          </div>
          <div class="depoimento-single">
            <p class="depoimento-descricao">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem inventore tempore aliquid soluta fugit perspiciatis
              sed. Fugiat delectus aut itaque, quisquam eaque rerum. Quae
              asperiores tenetur maiores quo ab suscipit?"
            </p>
            <p class="author-name">Lorem Ipsum</p>
          </div>
        </div>
        <div class="w50 left serviços-container">
          <h2 class="title">Serviços</h2>
          <div class="servicos">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia enim dolor repellat deleniti voluptatem, distinctio
                voluptates reprehenderit corporis recusandae debitis. Ullam
                molestias amet minus. Velit quis excepturi ratione eos unde.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia enim dolor repellat deleniti voluptatem, distinctio
                voluptates reprehenderit corporis recusandae debitis. Ullam
                molestias amet minus. Velit quis excepturi ratione eos unde.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia enim dolor repellat deleniti voluptatem, distinctio
                voluptates reprehenderit corporis recusandae debitis. Ullam
                molestias amet minus. Velit quis excepturi ratione eos unde.
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>
    <footer>
      <div class="center">
        <p>Todos os Direitos Reservados.</p>
      </div>
    </footer>
  </body>
</html>