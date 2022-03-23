function sum (number1, number2) {
  return (number1 + number2);
}

console.log(sum(5, 9));

function setReplace (phrase, word, wordReplace) {
  return (phrase.replace(word, wordReplace));
}

console.log(setReplace('A galinha pintadinha', 'pintadinha', 'cocoricó'));

function validateAge (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let yourAge = prompt('Sua Idade: ');
if (validateAge(yourAge)) {
  console.log('MAIOR DE IDADE');
} else {
  console.log('MENOR DE IDADE');
}

