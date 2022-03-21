<?php
# LEFT JOIN e RIGHT JOIN
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql = $pdo->prepare("SELECT * FROM `clientes` LEFT JOIN cargos ON `clientes` . `cargo` = `cargos` . `id`");
$sql->execute();
$clientes = $sql->fetchAll(PDO::FETCH_ASSOC);
foreach ($clientes as $key => $value) {
  echo $value['nome'];
  echo ' / ';
  echo $value['nome_cargo'];
  echo '<hr />';
}
?>