<?php
  // CRIANDO FUNÇÕES...
  
  function showName($name, $age) {
    echo ("<h2>Nome é $name e idade é $age.</h2>");
  }

  function calculator($num1 = 10, $num2 = 5) {
    echo ("<h1>Valor igual a: " . $num1 + $num2 ."</h2>");
  }

  function isTrue() {
    return true;
  }

  showName('Anna', '19');
  calculator();
  echo (isTrue());
?>