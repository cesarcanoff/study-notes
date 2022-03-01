<?php
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
$select = $pdo->prepare("SELECT * FROM clientes GROUP BY cargo HAVING points > 5");
$select->execute();

echo '<pre>';
print_r($select->fetchAll());
echo '</pre>';