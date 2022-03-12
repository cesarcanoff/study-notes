<?php
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
// $sql = $pdo->prepare("SELECT * FROM clientes WHERE id IN (1, 8)");
$sql = $pdo->prepare("SELECT * FROM clientes WHERE `data` BETWEEN '2022-03-01' AND '2022-03-30'");
# %% RETORNA O VALOR QUE CONTENHA A STRING DENTRO DOS PORCENTOS.
$sql->execute();
$emails = $sql->fetchAll();
echo '<pre>';
print_r($emails);
echo '</pre>';
