<?php
// PUBLIC PRIVATE STATIC...
include('Example.class.php');

$exemplo = new Exemplo;
$exemplo2 = new Exemplo;

$exemplo->setVar1('César');
echo($exemplo->getVar1());

echo('<br />');

$exemplo2->setVar1('Canoff');
echo($exemplo2->getVar1());

/*
$exemplo->var2 = 'cesar';
echo $exemplo->var2;

echo "<br />";

$exemplo2->var2 = 'canoff';
echo $exemplo2->var2;

echo "<br />";

echo Exemplo::$var3;
echo Exemplo::metodoStatic();
*/
?>