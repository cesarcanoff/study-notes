# Aula 21 - Classes

```jsx
// Class

// CRIANDO A CLASSE PAI
class Animal {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight;
  }

  // MÉTODO PARA RETORNAR O NOME
  showName () {
    return this.name;
  }
}

// CRIANDO A CLASSE (FILHA) EXTENDIDA DA CLASSE PAI
class Dog extends Animal {
  constructor (name, weight) {
    super(name, weight);
    // ACESSANDO CONSTRUTOR PAI
  }

  speak () {
    return 'Au Au!';
  }
}

// INSTANCIANDO A CLASSE
dog = new Dog('Bulldog', 8);

console.log(dog);
console.log(dog.showName());
onsole.log(dog.speak());
```