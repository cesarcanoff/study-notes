<?php
// CONECTANDO NO BANCO DE DADOS...
date_default_timezone_set('America/Sao_Paulo');
$pdo = new PDO ('mysql:host=localhost;dbname=modulo_8', 'root', '');

if (isset($_POST['acao'])) {
  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $momento_registro = date('Y-m-d H:i:s');
  $sql = $pdo->prepare("INSERT INTO `clientes` VALUES (null, ?, ?, ?)");
  $sql->execute(array($nome, $sobrenome, $momento_registro));
  echo "Cliente cadastrado!";
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cadastro</title>
</head>
  <body>
    <form method="POST">
      <input type="text" name="nome" required />
      <input type="text" name="sobrenome" required />
      <input type="submit" name="acao" value="Enviar" />
    </form>
  </body>
</html>