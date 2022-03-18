# Aula 16 - Exercício #3 - Calculadora dinâmica

```jsx
// CALCULATOR
let firstNum = parseFloat(prompt('Fisrt Number: '));
let secondNum = parseFloat(prompt('Second Number: '));
let signal = prompt(
  'Choose the signal of operation:\nSum (+)\nSubtraction (-)\nMultiplication (*)\nDivision (/)'
);

while (signal != '+' && signal != '-' && signal != '*' && signal != '/') {
  signal = prompt(
    'Sorry insert valid signal\nChoose the signal of operation:\nSum (+)\nSubtraction (-)\nMultiplication (*)\nDivision (/)'
  );
}

let finalResult = 0;

switch (signal) {
  case '+':
    finalResult += firstNum + secondNum;
    break;
  case '-':
    finalResult += firstNum - secondNum;
    break;
  case '*':
    finalResult += firstNum * secondNum;
    break;
  case '/':
    finalResult += firstNum / secondNum;
    break;
}

alert(`${firstNum} ${signal} ${secondNum} = ${finalResult}`);
```