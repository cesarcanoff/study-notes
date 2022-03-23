// ARRAY E DICIONÁRIO
let fruits = ['Apple', 'Banana', 'Kiwi', 'Wattermellon', 'Orange'];
console.log(fruits);
console.log('=======================');

// MOSTRANDO ITENS DO ARRAY COM SEU INDÍCE.
console.log('First Fruit - ' + fruits[0]);
console.log('Second Fruit - ' + fruits[1]);
console.log('Third Fruit - ' + fruits[2]);
console.log('Fourth Fruit - ' + fruits[3]);
console.log('Fifth Fruit - ' + fruits[4]);

// FUNÇÕES DE ARRAY

// ADICIONAR UM ELEMENTO NO FINAL DO ARRAY
fruits.push('Cherry');
fruits.push('Guava');

// REMEVOER O ÚLTIMO ITEM DO ARRAY
fruits.pop();

// EXIBIR TAMANHO DO ARRAY
console.log(`Possuem no Array ${fruits.length} itens.`);

// REVERETENDO ORDEM DO ARRAY
console.log(fruits.reverse());

// TRANSFORMAR ARRAY EM STRING
console.log(fruits.toString());

// TRANSOFRMAR ARRAY EM STRING MAS DIVIDI-LOS EM DETERMINADO CARACTERE
console.log(fruits.join(' - '));

// OBJETO / DICIONÁRIO

let persons = [
  {
    personFirstName: 'César',
    personLastName: 'Canoff',
    personFullAge: 18,
    personJob: 'Back-End Developer'
  },

  {
    personFirstName: 'Anna',
    personLastName: 'Firh',
    personFullAge: 19,
    personJob: 'Designer'
  },
]

console.log(persons);

// EXIBINDO CADA PROPRIEDADE DE CADA ITEM.
console.log(persons[0].personFirstName);
console.log(persons[0].personLastName);
console.log(persons[0].personFullAge);
console.log(persons[0].personJob);

console.log(persons[1].personFirstName);
console.log(persons[1].personLastName);
console.log(persons[1].personFullAge);
console.log(persons[1].personJob);