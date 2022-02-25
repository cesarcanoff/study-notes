<?php

// [FINAL] NÃO PODE SER HERDADA
class Daughter {

  protected function functionProtected () {
    echo 'FUNÇÃO PROTEGIDA';
  }

  private function teste() {
    echo 'PRIVADA';
  }

  public function showHello () {
    echo "Hello";
    echo "<br />";
    $this->teste();
  }
}

class Father extends Daughter {

  public function showHello () {
    parent::showHello();
    echo "<br />";
    echo "RESCREVENDO FUNÇÃO";
  }

  public function showBye () {
    echo "Bye";
    echo "<br />";
    $this->functionProtected();
  }
}

$filha = new Father;
$filha->showHello();
echo "<br />";
$filha->showBye(); // CLASSE HERDADA DA CLASSE FILHA.

?>