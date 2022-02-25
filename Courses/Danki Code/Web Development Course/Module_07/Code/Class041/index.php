<?php
  include('Class1.php');
  $teste = new Class1('César', 17);
  echo($teste->getName());
  echo "<br />";
  echo($teste->getAge());
?>