# JavaScript - Variáveis e Tipos

## Aula 01 - Atribuindo Valores

### Objetivos

1. Explicar o que são variáveis;
2. Explicar o que são constantes;
3. Explicar a diferença entre **var, let** e **const**.

---

### Atribuição de Valores

| Case Type | Example |
| --- | --- |
| Original Variable as String | some awesome var |
| Camel Case | someAwesomeVar |
| Snake Case | some_awesome_var |
| Kebab Case | some-awesome-var |
| Pascal Case | SomeAwesomeVar |
| Upper Case Snake Case | SOME_AWESOME_VAR |

### Variáveis - Var e Let

```jsx
var a = 1;
var b = 2;

if (a === 1) {
	var a = 11;
	let b = 22;
 
	console.log(a); // 11
	console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

```

- Escopo diferentes;
- Hoisting;
- Redeclaração;
- Reatribuição;
- camelCase.

---

### Constantes

- Declarada em SNAKE_UPPER_CASE;
- Escopo de bloco;
- E não faz Hoisting.

---

```jsx
const DAYS_IN_A_WEEK = 7;
const MY_NAME = 'Kieran';
```

|  | VAR | CONST | LET |
| --- | --- | --- | --- |
| Escopo | global ou local | bloco | bloco |
| Redeclarar | SIM | NÃO | NÃO |
| Reatribuir | SIM | NÃO | SIM |
| Hoisting | SIM | NÃO | NÃO |

## Aula 02 - Tipos

### Objetivos

1. Apresentar as principais estruturas de dados do JavaScript e seus principais métodos.

---

### Estruturas de Dados

- JavaScript é uma linguagem de **tipagem dinâmica;**
- Antes de declarar o valor/variável, não é necessário a especificação do tipo dele.

---

### Strings

```jsx
const DIO = 'Digital Innovation One';

let firstName = 'César';
let lastName = 'Canoff';

let fullName = `Nome completo: ${firstName} ${lastName}.`;
```

- Comumente utilizada para textos;
- Valores declarados entre aspas ou crases;

---

### Strings

Métodos Importantes

- Concatenação;
- Propriedade length;
- Iterabilidade;
- Formatação;
- Index das letras.

---

### Numbers

- Números inteiros e decimais;

---

### Booleans

- True or False.

---

### Arrays

- Iteráveis;
- Múltiplas funções.

---

### Objects

Estrutura do tipo chave valor.

- Keys;
- Values.

---

### Empty, Undefined e Null

- Empty - Variável existe, mas está vazia [0, “”];
- Null - Valor nulo/false;
- Undefined - O valor nem foi apresentado.

---

## Aula 03 - Atividade Prática

### Objetivos

1. Exercitar os conceitos aprendidos nas aulas anteriores.

---