<?php
 // PHP POO

class Pessoa
{
 // ATRIBUTOS
 private $name = 'César';
 private $age = 17;
 private $wight = 70.8;

 // MÉTODOS
 public function crescer () {
  $this->comer();
  echo('Estou crescendo!!');
 }

 private function comer () {
  echo('Estou comendo!!');
 }
}

// INSTANCIAR

$pessoa = new Pessoa;
$pessoa2 = new Pessoa;

echo($pessoa->crescer());
?>