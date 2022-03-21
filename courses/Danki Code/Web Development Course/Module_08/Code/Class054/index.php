<?php
define('HOST', 'localhost');
define('DB', 'modulo_8');
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
$pdo->exec("LOCK TABLES `clientes` WRITE");
# BLOQUEIA A TABELA ATÉ QUE TERMINE O PROCESSO.
sleep(10);