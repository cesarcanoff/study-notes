# Reduce

### Objetivos

1. Conhecer a implementação do método Reduce.

---

### O que é?

- Executa uma função em todos os elementos do array, retornando um valor único.

---

### Sintaxe

```jsx
// CALLBACK É A FUNÇÃO QUE VAI SER EXECUTADA DENTRO DO ARRAY EM CADA ELEMENTO
array.reduce(callbackFn, initalValue);
callback(iten, index, array);
```

### Exemplo

```jsx
const callbackFn = function (accumulator, currentValue, index, array) {
	// Do Something
}

array.reduce(callbackFn, initalValue);
```