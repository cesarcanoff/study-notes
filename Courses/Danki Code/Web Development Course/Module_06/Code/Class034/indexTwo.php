<?php
session_start();
if (isset($_SESSION['name'])) {
  echo ($_SESSION['name']);
}

unset($_SESSION['name']); // KILL THE SESSION.
session_destroy(); // DESTRUIR TODAS AS SESSÕES...
?>