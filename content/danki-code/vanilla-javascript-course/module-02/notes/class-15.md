# Aula 15 - Exercício #2 - Cálculo de idade

```jsx
let name = prompt("What's your name?");
let yearActually = prompt("What's year are we?");
let yearBorn = prompt('What year were you born?');

while (yearBorn >= yearActually) {
  yearBorn = prompt(
    'Sorry, insert a valid date!\nWhat year were you born?'
  );
}

var age = yearActually - yearBorn;
alert(`Hi, ${name}, you have ${age} years old.`);
```