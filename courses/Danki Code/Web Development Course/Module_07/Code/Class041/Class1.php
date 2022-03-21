<?php

class Class1 {
  private $name;
  private $age;

  function __construct ($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }

  public function getName () {
    return $this->name;
  }

  public function getAge () {
    return $this->age;
  }
}
?>