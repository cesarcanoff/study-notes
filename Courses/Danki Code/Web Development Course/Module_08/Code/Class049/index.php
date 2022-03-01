<?php
  $pdo = new PDO('mysql:host=localhost;dbname=modulo_8', 'root', '');

  # UPDATE (id)
  $id = 8;

  $sql = $pdo->prepare("DELETE FROM `clientes` WHERE id = ?");

  # PROTEÇÃO SOBRE SQL INJECTION...
  if ($sql->execute(array($id))) {
    echo "Cliente deletado com sucesso!";
  }

?>