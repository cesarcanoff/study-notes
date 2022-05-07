# JavaScript - Sintaxe e Operadores

## Operadores

### Objetivos

1. Conhecer os operadores mais populares do JavaScript;

---

- Aritmética;
- Atribuição;
- Comparação;
- Lógica;
- Condicional.

---

| Operador | Exemplo | Equivalente a |
| --- | --- | --- |
| = | X = Y | X = Y |
| += | X += Y | X = X + Y |
| *= | X *= Y | X = X * Y |
| /= | X /= Y | X = X / Y |
| %= | X %= Y | X = X % Y |

### Aritméticos

| Operador | Descrição |
| --- | --- |
| + | Adição |
| - | Subtração |
| * | Multiplicação |
| ** | Exponenciação |
| / | Divisão |
| % | Módulo |
| ++ | Incrementar |
| — | Decrementar |

### Comparação

| Operador | Descrição |
| --- | --- |
| == | Igual a |
| === | Mesmo valor e mesmo tipo |
| ≠ | Diferente |
| ≠= | Valor e Tipos diferentes |
| > | Maior que |
| < | Menor que |
| ≥ | Maior ou igual a |
| ≤ | Menor ou igual a |

### Lógica

| Operador | Descrição |
| --- | --- |
| && | “e” lógico |
| || | “ou” lógico |
| ! | “não” lógico |

### Condicional

```jsx
(condition) ? expression1 : expression2
```

```jsx
function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
```