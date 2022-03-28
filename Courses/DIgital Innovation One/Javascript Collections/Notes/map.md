# Map

## Objetivos da Aula

1. Apresentar a coleção Map;
2. Explicar sua aplicação;
3. Explicar a diferença entre Map e Objeto.

---

### Características

- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for..of

---

### Métodos

```jsx
// Instanciando o Map
const myMap = new Map();

// Adicionar itens (SETAR)
myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

// Recuperar os valores
myMap.get("apple");
// "fruit"

// Apagar item
myMap.delete("apple");
// true

myMap.get('apple');
// undefined
```

### Maps VS Objeto

- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.

---