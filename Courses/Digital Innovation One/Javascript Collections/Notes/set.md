# Set

## Objetivos da Aula

1. Apresentar a coleção Set;
2. Explicar sua aplicação;
3. Explicar a diferença entre Set e Array.

---

### Estrutura

Sets são estruturas que armazenam apenas valores únicos.

---

```jsx
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.delete(5);
```

### Set VS Array

- Possui valores únicos.
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce e etc.

---