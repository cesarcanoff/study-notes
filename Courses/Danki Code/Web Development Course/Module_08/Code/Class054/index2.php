<?php
define('HOST', 'localhost');
define('DB', 'db_teste');
define('USER', 'root');
define('PASS', '');

try { # TENTANDO CONEXÃO - EVITA QUE A SENHA VAZE...
  $pdo = new PDO(
    'mysql:host=' . HOST . ';dbname=' . DB,
    USER,
    PASS,
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8") # SET UTF-8
  );
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
  echo '<h1>ERRO AO CONECTAR COM A BASE DE DADOS!</h1>';
}

$sql = $pdo->prepare("SELECT * FROM `clientes`");
$sql->execute();
$usuarios = $sql->fetchAll();

// echo('<pre>');
// print_r ($usuarios);
// echo('</pre>');
foreach ($usuarios as $key => $value) {
  echo $value['nome'];
  echo '<hr />';
}