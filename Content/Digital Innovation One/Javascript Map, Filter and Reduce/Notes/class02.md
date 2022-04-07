# Map

### Objetivos

1. Conhecer a implementação do método Map.

---

### O que é?

- Cria um novo array;
- Não modifica o array original;
- Realiza as operações em ordem.

---

### Sintaxe

```jsx
// CALLBACK É A FUNÇÃO QUE VAI SER EXECUTADA DENTRO DO ARRAY EM CADA ELEMENTO
array.map(callback, thisArg);
callback(iten, index, array);
```

### Map VS forEach

```jsx
// Usando Map

const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); // RETORNA [2, 4, 6, 8, 10];

// Usando forEach
const array = [1, 2, 3, 4, 5];
const array_2 = array.forEach((item) => item * 2); // RETORNA UNDEFINED.
array.forEach((item) => item * 2); // RETORNA UNDEFINED.
```

- Valor de retorno;
- Considere se o array auxiliar é necessário;

---