<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trabalhando com GET e POST</title>
</head>
<body>
  <?php
  if(isset($_GET['acao'])) {
    echo($_POST['num1'] + $_POST['num2']);
  }

  if (isset($_POST['acao'])) {
    foreach($_POST['valor'] as $key => $value) {
      $result += $value;
    }
    echo "$result <br />";
  }
  ?>
  <form method="POST">
    <input type="checkbox" name="valor[]" value="10" />10
    <input type="checkbox" name="valor[]" value="20" />20
    <input type="checkbox" name="valor[]" value="30" />30
    <input type="checkbox" name="valor[]" value="40" />40
    <input type="submit" name="acao" value="Entrar" />
  </form>
</body>
</html>