<?php
  // LOOPING (FOREACH E FOR)

  $arr = array('key1' => 'César', 'Caio', 'Luis', 'Mario');
  foreach ($arr as $key => $value) {
    echo ("$key = $value <br />");
  }

  $total = count($arr);
  echo ("Valores totais: $total");

  // FOR TRABALHA COM APENAS NÚMEROS.
?>