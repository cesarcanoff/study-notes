<?php
// FUNÇÕES PARA MANIPULAR ARRAY...

$arr1 = array(1, 2, 3, 4);
$arr2 = array(15, 20, 855, 87);
$result = array_merge($arr1, $arr2); // UNIR DOIS ARRAYS...
echo('<pre>');
print_r($result);
echo('</pre>');

$arr1 = array(
  'key1' => 'Cair',
  'key2' => 'Ruanda',
  'key3' => 'Prenda',
  'key4' => 'Panda'
);
$arr2 = array('key1' => 'Casa', 'key2' => 'Rua');
echo '<pre>';
// RETORNA AS CHAVES IGUAIS DO ARRAY.
print_r(array_intersect_key($arr1, $arr2));
echo '</pre>';

$arr = ['<p>César</p>', 'Caio', 'Luiz', '<h1>Anna</h1>'];
// APLICA UMA FUNÇÃO EM TODOS OS DADOS DO ARRAY.
print_r(array_map('strip_tags', $arr));

?>