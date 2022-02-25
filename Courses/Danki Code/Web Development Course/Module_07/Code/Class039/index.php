<?php
// ABSTRACT NÃO PODE SER INSTANCIADA APENAS HERDADA...
abstract class Teste {
  public function func1 () {
    echo ("Func1");
  }

  abstract function func2();
  // CLASSE PRECISA SER DEFINIDA NOVAMENTE...
}

class Principal extends Teste {

    /*
    UM MÉTODO
    ABSTRATO DENTRO DE UMA
    CLASSE ABSTRATA PRECISA SER
    RESCRITO NA CLASSE PRINCIPAL
    */
    public function func2 () {
      echo 'DECLARANDO A FUNCIONALIDADE DO MÉTODO ABSTRATO';
    }

    static function staticMethod () {
      echo "ESTÁTICO";
    }

    public function function1() {
      echo "<br />";
      Principal::staticMethod();
      echo "<br />";
      /*
      SELF SERVE APENAS PARA CHAMAR
      MÉTODOS ESTÁTICOS DENTRO DA CLASSE.
      */
      // Principal::staticMethod();
      self::staticMethod(); // SELF REPLACE CLASS NAME.
    }

  }

  $main = new Principal;
  $main->func1();
  $main->function1();
  echo "<br />";
  $main->func2();
  echo "<br />";
  Principal::staticMethod();
?>