<?php
# ------ FACTORY DESING PATTERN ------
class Dog {
  public function __construct () {
    echo "Dog Init";
  }
}

class Cat {
  public function __construct () {
    echo "Cat Init";
  }
}


class Animal {
  public static function build ($className) {
    if (class_exists($className)) {
      return new $className;
    } else {
      echo "Ops, class none...";
    }

  }
}

Animal::build('Dog');

# ------ FACADE PATTERN ------
class Store {
  public function closeOrder () {
    echo 'FInalizar Compra <br />';
    $cart = new Cart();
    $cart->closeCart();
    $frete = new Freight();
    $frete->calcFreight();
  }
}

$loja = new Store();
$loja->closeOrder();

class Cart {
  public function closeCart () {
    echo "Cart is Close! <br />";
  }
}

class Freight {
  public function calcFreight () {
    echo "Freight Calculed <br />";
  }
}

?>