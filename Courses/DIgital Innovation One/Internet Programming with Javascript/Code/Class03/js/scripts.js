/* 
  CONDICIONAIS
  let age = prompt("What's years old?");
  if (age >= 18) {
    console.log('MAIOR DE IDADE');
  } else {
    console.log('MENOR DE IDADE');
  }
*/
// LAÇOS DE REPETIÇÃO

let count = 0;
while (count <= 10) {
  console.log('WHILE: ' + count);
  count++;
}

for (i = 0; i <= 10; i++) {
  console.log('FOR: ' + i);
}

let countDoWhile = 0;
do {
  console.log('DO WHILE: ' + countDoWhile);
  countDoWhile++;
} while (countDoWhile <= 10);

// DATA

let date = new Date();

// EXIBINDO O MÊS
console.log(date.getMonth() + 1);

// EXIBINDO O DIA
console.log(date.getDay());

// EXIBINDO O HORAS
console.log(date.getHours());

// EXIBINDO O ANO
console.log(date.getFullYear());

// EXIBINDO O MINUTOS
console.log(date.getMinutes());

// EXIBINDO O TIME ZONA
console.log(date.getTimezoneOffset());

