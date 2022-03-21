# Aula 20 - Praticando Orientação a Objetos

```jsx
//OBJECTS
function Person() {
  this.name = 'César';
  this.age = 18;
  this.printName = function (param) {
    console.log(param);
  }
}

let person = new Person();
let person_2 = new Person();

person_2.name = 'Anna';

person.printName(person_2.name);

function Animal(name, weight) {
  if (name === undefined) {
    this.name = 'Dog';
  }

  if (weight === undefined) {
    this.weight = 10;
  } else {
    this.name = name;
    this.weight = weight;
  }
  this.speakNow = function () {
    if (this.name == 'Dog') {
      console.log('Au Au!');
    } else if (this.name == 'Cat') {
      console.log('Meow!');
    } else {
      console.log('Animal Noise');
    }
  }
}

let animal = new Animal()
animal.speakNow();
console.log(animal);

function Person() {
  this.name = 'César';
  this.age = 18;
  //PASSANDO OBJETO COMO PARÂMETRO...
  this.showPet = function (pet) {
    return pet.name;
  }
}

function Animal(name, weight) {
  if (name === undefined) {
    this.name = 'Dog';
  }

  if (weight === undefined) {
    this.weight = 10;
  } else {
    this.name = name;
    this.weight = weight;
  }
  this.speakNow = function () {
    if (this.name == 'Dog') {
      console.log('Au Au!');
    } else if (this.name == 'Cat') {
      console.log('Meow!');
    } else {
      console.log('Animal Noise');
    }
  }
}

let person = new Person();
let animal = new Animal('Cat', 7);
console.log(person.showPet(animal));
```