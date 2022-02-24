<?php
  // DIE E SLEEP...

  /*
  sleep(1); // SERVIDOR DURMA.
  echo ('Olá');
  */

  $name = 'Césaro';
  if ($name === 'César') {
    echo ('Olá César');
  } else {
    echo ('O script PAROU!');
    die();
  }
?>