# Orientação a Objetos em Javascript - OOJS

### Objetivos

1. Apresentar o conceito de de protótipos e cadeia de protótipos;
2. Apresentar a estrutura de classes em Javascript.

---

### Protótipos

Todos os objetos Javascript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo dessa cadeia.

---

### Classes

**Syntatic Sugar:** Uma sintaxe feita para facilitar a escrita.

---

```jsx
var Meal = function (food) {
	this.food = food;
}

Meal.prototype.eat = function () {
	return 'Eating!';
}
```

```jsx
class Meal {
	constructor (food) {
		this.food = food;
	}

	eat() {
		return 'Eating!'
	}
	
}
```