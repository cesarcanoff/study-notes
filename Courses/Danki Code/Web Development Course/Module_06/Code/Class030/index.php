<?php
  // FUNÇÕES DE STRING...

$conteudo = 'Lorem ipsum dolor sit amet, consectetur adipisci.';

echo (substr($conteudo, 0, 20));
$name = 'César Eduardo de Almeida Canoff';
echo('<br />');
$fullName = explode(' ', $name); // SEPARANDO A STRING...
print_r($fullName);

// JUNTANDO O ARRAY COM DELIMITADOR...
$fullNameToggle = implode('-', $fullName);
print_r($fullNameToggle);
echo('<br />');

$conteudo2 = '<h1>César</h1>teste';
echo(strip_tags($conteudo2)); // RETIRA HTML...
echo('<br />');
// MOSTRA O CÓDIGO HTML E EVITA QUE O BROWSER INTERPRETE...
echo(htmlentities('<div>TESTE</div>'));

?>