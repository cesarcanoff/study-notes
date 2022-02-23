<?php
  // LAÇOS DE REPETIÇÃO...

  // FOR
  for ($i = 0; $i <= 10; $i++) {
    echo ("Hello World $i <br />");
  }

  $contador = 0;
  while ($contador <= 10) {
    echo ("Número: $contador <br />");
    $contador++;
  }

  $cont2 = 0;
  do {
    echo ('Olá DoWhile! <br />');
    $cont2++;
  } while ($cont2 <= 15);
