/*
  Atividade 1: Maps
  Crie uma função que retorna o nome dos membros
  de um Map que tem o papel 'ADMIN' no sistema.
  1 - Crie uma função getAdmins que recebe um Map;
  2 - Crie um Map e popule-o com nomes de usuários e seus
  papeis no sistema. (Ex: 'Luiz' => 'Admin');
  3 - Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

  Atividade 2: Sets
  Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

function getAdmins (map) {
  let adminsList = [];
  for ([key, value] of map) {
    if (value == 'Admin') {
      adminsList.push(key);
    }
  }
  return adminsList;
}

const users = new Map();
users.set('César', 'Admin');
users.set('Caio', 'User');
users.set('Anna', 'Admin');
users.set('Paul', 'User');

console.log(getAdmins(users));

// SET


const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
function singleValue (arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(singleValue(myArray));