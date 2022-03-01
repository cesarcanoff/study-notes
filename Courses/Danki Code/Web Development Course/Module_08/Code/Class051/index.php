<?php
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
# MOSTRAR ERROS DO PDO...
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = $pdo->prepare("SELECT * FROM `clientes` GROUP BY cargo ORDER BY cargo ASC LIMIT 2");
$sql->execute();
$clientes = $sql->fetchAll(PDO::FETCH_ASSOC);
foreach ($clientes as $key => $value) {
  echo $value['nome'];
  echo '<hr />';
}
