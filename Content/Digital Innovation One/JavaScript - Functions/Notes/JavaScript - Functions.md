# JavaScript - Funções

### Aula 01 - Tipos de Funções

### Objetivos

1. Apresentar a estrutura de uma função;
2. Alguns outros tipos de funções e como utilizadas.

---

### Estrutura

Definição comum de uma função.

```jsx
function name (params) {
 // INSTRUÇÕES
}
```

```jsx
function name (params) {
 // INSTRUÇÕES
return; // VALOR RETORNADO
}
```

### Função Anônima

Funções que representam expressões.

```jsx
const sum = function (a, b) {
 return a + b;
}

sum(1, 2); // 3
sum(5, 4); // 9
```

### Função auto invocável

IIFE (Immediatelly Invoked Function Expression)

```jsx
{
	function () {
		let name = 'DIO';
		return name;
	}
}();
```

```jsx
{
	function (a, b) {
		return a + b;
	}
}(1, 8);

{
	const soma3 =  (
		function () {	
			return a + b;
		}
)(1, 8);

console.log(soma3); // 9
```

### Callbacks

Uma função passada como argumento para outra.

```jsx
const calc = function (operacao, num1, num2) {
 return operacao(num1, num2);
}

const soma = function(num1, num2) {
 return num1 + num2;
}

const sub = function(num1, num2) {
	return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);
console.log(resultSoma);
```

### Aula 02 - Parâmetros

### Objetivos

1. Ensinar como manipular parâmetros de uma função;
2. Técnicas para lidar com números indefinidos de parâmetros.

---

### Valores Padrão

```jsx
function exponencial(array, num) {
	if (num === undefined) {
		num = 1;	
	}

	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] ** num);
	}

	return result;
}

exponencial([1, 2, 4, 4, 5]); // [1, 2, 4, 4, 5]
exponencial([1, 2, 4, 4, 5], 2); // [1, 4, 16, 16, 25]
```

```jsx
function exponencial(array, num = 1) {

	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] ** num);
	}

	return result;
}

exponencial([1, 2, 4, 4, 5]); // [1, 2, 4, 4, 5]
exponencial([1, 2, 4, 4, 5], 2); // [1, 4, 16, 16, 25]
```

### Arguments

```jsx
function findMax() {
	let max = -Infinity;

	for(let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
return max;
}
```

### Arrays e Objetos

Spread: Uma foram de lidar separadamente com elementos.

```jsx
function sum (x, y, z) {
	return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
```

Rest: Combina os argumentos em um array.

```jsx
function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 5, 8); // 3
```

### Objetos

Object Destructuring

```jsx
const user = {
	id: 42,
	displayName: jdoe',
	fullName: {
		firstName: 'John',
	lastName: 'Doe'
};

function userId({id}) {
	return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
	return ${first) ${last}';
}

userId(user); // 42
getFullName(user); // John Doe
```

### Aula 03 - Loops

### Objetivos

1. Ensinar como utilizar algumas das mais famosas declarações do JavaScript.

---

### If/Else

- Condição;

```jsx
function numeroPositivo(num) {
	let resultado;
	if (num < 0) {
	  resultado = false;
  } else {
		resultado = true;
	}

	return resultado;
}

numeroPositivo(2); // TRUE
numeroPositivo(-2); // FALSE
```

### Switch/Case

- Equivalente a uma comparação de tipo e valor (===);
- Sempre precisa de um valor “default”;
- Ideal para quando se precisa comparar muitos valores.

---

```jsx
function getANimal() {
	switch (id) {
		case 1:
			return 'Dog';
		case 2:
			return 'Cat';
		case 3:
			return 'Bird';
		default:
			return 'Fish';
	}
}

getAnimal(1); // Dog
getAnimal(3); // Bird
```

### For

Loop dentro de elementos iteráveis (arrays, strings).

```jsx
function multiplicaPorDois (arr) {
	let multiplicados = [];

	for (let i = 0; i < arr.length; i++) {
		multiplicados.push(arr[i] * 2);
	}

	return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];
multiplicaPorDois(meusNumeros);
```

### For...In

Loop entre propriedades enumeráveis de um objeto.

```jsx
function forInExemplo (obj) {
	for (prop in obj) {
		console.log(prop);	
	}
}

const meuObjeto = {
	name: 'João',
	age: '20',
	city: 'Vancouver'
}

forInExemplo(meuObjeto);
// Name
// Age
// City
```

```jsx
function forInExemplo (obj) {
	for (prop in obj) {
		console.log(obj[prop]);	
	}
}

const meuObjeto = {
	name: 'João',
	age: '20',
	city: 'Vancouver'
}

forInExemplo(meuObjeto);
// João
// 20
// Vancouver
```

### For...Of

Loop entre estruturas iteráveis (array, strings).

```jsx
function logLetras (palavra) {
	for (letra of palavra) {
			console.log(letra);
	}
}

const palavra = "abacaxi";
logLetras(palavra);
// a
// b
// a
// c
// a
// x
// i
```

```jsx
function logNumeros (nums) {
	for (num of nums) {
			console.log(num);
	}
}

const nums = [22, 55, 67, 33, 78];
logNumeros(nums);
// 22
// 55
// 67
// 33
// 78
```

### While

```jsx
function exemploWhile() {
 let num = 0;

 while(num <= 5) {
		console.log(num);
		num++
	}
}

exemploWhile();
// 0
// 1
// 2
// 3
// 4
// 5
```

```jsx
function exemploDoWhile() {
 let num = 6;

 do {
	console.log(num);
	num++
 } while (num <= 5);
}

exemploDOWhile();
// 6
```

### Aula 04 - This

### Objetivos

1. Apresentar a palavra “this” e seu uso;
2. Como aplicar métodos para manipular seu valor.

---

### O que é?

A palavra reservada **this** é um referência de contexto.

```jsx
const pessoa = {
	firstName : "André",
	lastName : "Soares",
	id : 1,
	fullName: function() {
		return this.firstName +
	},
	getId: function() {
		return this.id;
	}
};

pessoa.fullName();
// "André Soares"
pessoa.getId();
// 1
```

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

| Contexto | Referência |
| --- | --- |
| Em um objeto (método) | Próprio objeto dono do método. |
| Sozinha | Objeto global (em navegadores, window) |
| Função | Objeto global |
| Evento | Elemento que recebeu o evento. |

### Call

```jsx
const pessoa = {
	nome: 'Miguel'
};

const animal = {
	nome: 'Murphy'
};

function getSomething() {
	console.log(this.nome);
}

getSomething.call(pessoa);
```

### Apply

```jsx
const pessoa = {
	nome: 'Miguel'
};

const animal = {
	nome: 'Murphy'
};

function getSomething() {
	console.log(this.nome);
}

getSomething.apply(pessoa);
```

### Bind

```jsx
const retornaNomes = function () {
	return this.nome;
}

let bruno = retornaNomes.bind({ nome: 'Bruno' });
bruno(); // Bruno
```

### Aula 05 - Arrow Functions

### Objetivos

1. Apresentar a sintaxe de Arrow Functions;

---

```jsx
const helloWorld = () => {
	return 'Hello World!';
}

const helloWorld = function () => {
	return 'Hello World!';
}

const helloWorld = () => 'Hello, World!';
```

### Arrow Funcions NÃO fazem Hoisting