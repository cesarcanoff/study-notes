<?php
  $pdo = new PDO('mysql:host=localhost;dbname=modulo_8', 'root', '');

  # UPDATE (id)
  $id = 3;

  # NUNCA FAÇA UPDATE SEM WHERE...
  $sql = $pdo->prepare("UPDATE `clientes`
  SET nome='Sophie', sobrenome='Wild' WHERE nome='RTFGSG' AND sobrenome='GFDGDF'");

  if ($sql->execute()) {
    echo "Cliente atualizado com sucesso!";
  }

?>