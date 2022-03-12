<?php
// SESSÕES E COOKIES...
  session_start();
  // $_SESSION['name'] = 'César';
  setcookie('name', 'César', time() - (60 * 60 * 24), '/');
  echo $_COOKIE['name'];
?>