<?php
$pdo = new PDO('mysql:host=localhost;dbname=db_teste', 'root', '');
// SUB-QUERY
$select = $pdo->prepare("SELECT * FROM filmes WHERE categoria_id = (SELECT categoria_id FROM categorias WHERE nome = 'Terror')");