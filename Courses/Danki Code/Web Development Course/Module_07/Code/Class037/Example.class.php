<?php

class Exemplo
{
  private $var1;
  public $var2;
  public static $var3 = 'staticVar';

  static function metodoStatic() {}
  public function metodo() {}
  private function metodo2() {}

  public function setVar1 ($var1) {
    $this->var1 = $var1;
    return $this->var1;
  }

  public function getVar1 () {
    return $this->var1;
  }

}
?>