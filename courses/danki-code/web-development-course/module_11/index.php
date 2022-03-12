<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Descrição do meu site!" />
  <meta name="keywords" content="palavras, chave, por, virgula" />
  <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>css/style.css" />
  <script src="https://kit.fontawesome.com/cdfcec8efd.js" crossorigin="anonymous"></script>
  <title>Projeto Prático 01</title>
</head>

<body>
  <header>
    <div class="center">
      <div class="logo left">
        <a href="/">LOGO</a>
      </div>
      <nav class="desktop right">
        <ul>
          <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>contato">Contatos</a></li>
        </ul>
      </nav>
      <nav class="mobile right">
        <div class="menu-button-mobile">
          <p><i class="fa-solid fa-bars"></i></p>
        </div>
        <ul>
          <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
          <li><a href="<?php echo INCLUDE_PATH; ?>contato">Contatos</a></li>
        </ul>
      </nav>
      <div class="clear"></div>
    </div>
  </header>
  <?php
  $url = isset($_GET['url']) ? $_GET['url'] : 'home';
  if (file_exists('pages/' . $url . '.php')) {
    include('pages/' . $url . '.php');
  } else {
    $page404 = true;
    // PÁGINA NÃO EXISTE.
    include('pages/404.php');
  }
  ?>
  <footer <?php if (isset($page404) && $page404 == true) echo 'class="fixed"' ?>>
    <div class="center">
      <p>Todos os Direitos Reservados.</p>
    </div>
  </footer>
  <script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
  <script src="<?php echo INCLUDE_PATH; ?>js/scripts.js"></script>
  <?php
    if ($url == 'contato') {
  ?>
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDHPNQxozOzQSZ-djvWGOBUsHkBUoT_qH4"></script>
  <script src="<?php echo INCLUDE_PATH; ?>js/map.js"></script>
  <?php } ?>
</body>

</html>