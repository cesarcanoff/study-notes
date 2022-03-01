<?php
  $pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
  $sql = $pdo->prepare("SELECT name FROM clientes WHERE email LIKE '%ces%'");
  # %% RETORNA O VALOR QUE CONTENHA A STRING DENTRO DOS PORCENTOS.
  $sql->execute();
  $emails = $sql->fetchAll();
  echo '<pre>';
  print_r($emails);
  echo '</pre>';
