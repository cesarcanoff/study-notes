# Filter

### Objetivos

1. Conhecer a implementação do método Filter.

---

### O que é?

- Cria um novo array;
- Não modifica o array original.

---

### Sintaxe e Parâmetros

```jsx
// CALLBACK É A FUNÇÃO QUE VAI SER EXECUTADA DENTRO DO ARRAY EM CADA ELEMENTO
array.filter(callback, thisArg);
callback(iten, index, array);
```

### Exemplo

```jsx
const frutas = ['Maçã Fuji', 'Maçã Verde', 'Laranja', 'Abacaxi'];
frutas.filter(frutas) => fruta.includes('Maçã'));
// RETORNA: ['Maçã Fuji', 'Maçã Verde'];
```