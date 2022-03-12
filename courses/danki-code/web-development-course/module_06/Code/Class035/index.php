<?php
// SINTAXE ALTERNATIVA NO PHP...
$name = 'César';
if ($name == 'César') {
  echo($name);
}

echo('<br />');

$contador = 0;
while ($contador <= 5) {
  echo $contador;
  $contador++;
}

echo('<br />');

$arr = ['César', 'Caio', 'Anna'];
foreach ($arr as $key => $value) {
  echo("$key => $value <br />");
}

echo('<br />');

for ($i = 0; $i <= 10; $i++) {
  // code here.
}

// OUTRA SINTAXE
$name = 'César';
if ($name == 'César'):
  echo($name);
endif;

echo('<br />');

$contador2 = 0;
while ($contador2 <= 5):
  echo $contador2;
  $contador2++;
endwhile;

echo('<br />');

$arr2 = ['César', 'Caio', 'Anna'];
foreach ($arr2 as $key => $value):
  echo("$key => $value <br />");
endforeach;

for ($i = 0; $i <= 10; $i++):
  // code here.
endfor;

?>