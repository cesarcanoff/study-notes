<?php
// OPERADORES MATEMÁTICOS E LÓGICOS.
$num = 11;
$num2 = 11;

// OPERADORES MATEMÁTICOS.
if ($num < $num2) {
  echo ('MENOR! <br />');
} else if ($num > $num2) {
  echo ('MAIOR! <br />');
} else if ($num <= $num2) {
  echo ('MENOR OU IGUAL! <br />');
} else if ($num >= $num2) {
  echo ('MAIOR OU IGUAL! <br />');
} else if ($num == $num2) {
  echo ('IGUAL! <br />');
} else if ($num !== $num2) {
  echo ('DIFERENTE! <br />');
}

// OPERADORES LÓGICOS
$var1 = 'valor1';
$var2 = 'valor2';
$var3 = 'valor3';

if (($var1 == $var2) && ($var2 == $var3)) {
  echo('IGUAL <br />');
} else {
  echo('MENTIRA <br />');
}

if (($var1 == $var2) || ($var2 == $var3)) {
  echo('IGUAL <br />');
} else {
  echo('MENTIRA <br />'); 
}