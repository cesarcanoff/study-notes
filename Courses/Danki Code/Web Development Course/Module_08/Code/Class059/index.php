<?php
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
// $tables = $pdo->query("SHOW TABLES");
// $tables = $tables->fetchAll();

// echo '<pre>';
// print_r($tables);
// echo '</pre>';

$sql = 'CREATE TABLE cursos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(255) NOT NULL
)';

$pdo->exec($sql); # $pdo->exec() NÃO RETORNA NADA...