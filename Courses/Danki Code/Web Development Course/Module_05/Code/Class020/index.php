<?php
  // CONDIÇÕES
  $name = 'César';
  $age = 17;
  if ($name == 'César') {
    echo("Olá $name <br />");
  } else {
    echo('Olá desconhecido! <br />');
  }

  if ($age >= 18) {
    echo("$name você não pode dirigir, pois é menor de idade. <br />");
  } else {
    echo("$name você pode dirigir, pois é maior de idade. <br />");
  }
  echo ('-------------------------------');
?>