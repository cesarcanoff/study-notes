<?php
// SWITCH CONTINUE E BREAK...
$name = 'Caio';

switch($name) {
 case 'César':
 echo("Olá $name");
 break;
 case 'Caio':
 echo("Olá $name");
 break;
}

echo '<br />';

// BREAK - FOR, WHILE DO, FOREACH SWITCH...
// CONTINUE - FOR, WHILE DO, FOREACH...

for($i = 0; $i <= 10; $i++) {
 echo $i;
 echo '<br />';
 if ($i === 5)
 // SE TIVER APENAS UMA LINHA PODE RETIRAR OS '{}'
  break;
}

for($i = 0; $i < 10; $i++) {
 if ($i == 5)
  continue;
 echo $i;
 echo '<br />';
}

?>