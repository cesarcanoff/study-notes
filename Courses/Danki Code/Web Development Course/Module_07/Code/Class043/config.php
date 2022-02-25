<?php
function myAutoLoad ($class) {
  // ARRUMANDO A BARRA NO LINUX...
  $class = str_replace('\\', '/', $class);
  if (file_exists("class/$class.php")) {
    include("class/$class.php");
  }
}

spl_autoload_register('myAutoLoad');
?>