<?php

class minhaClasse
{
  const VALOR = 3200;
  public function __construct () {
    echo self::VALOR;
  }
}

echo minhaClasse::VALOR;
$minhaClasse = new minhaClasse;
?>