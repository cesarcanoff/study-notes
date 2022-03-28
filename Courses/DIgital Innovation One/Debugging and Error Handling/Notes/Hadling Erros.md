# Tratando Erros

## Objetivos

1. Apresentar a diferença entre “throw” e “return”;
2. Apresentar a implementação da declaração try/catch.

---

### Throw

```jsx
function verificaPalindromo(string) {
	if (!string) return "String Inválida";

	return string === string.split('').reverse().join();
}

verificaPalindromo('cat');
```

```jsx
function verificaPalindromo(string) {
	if (!string) throw "String Inválida";

	return string === string.split('').reverse().join();
}

verificaPalindromo('cat');
```

## Try/Catch

```jsx
function verificaPalindromo(string) {
	if (!string) throw "String Inválida";

	return string === string.split('').reverse().join();
}

function tryCatchExemplo(string) {
	try {
		verificaPalindromo(string);
	} catch (e) {
		console.log(e);
	}
}

tryCatchExemplo();
```

```jsx
function verificaPalindromo(string) {
	if (!string) throw "String Inválida";

	return string === string.split('').reverse().join();
}

function tryCatchExemplo(string) {
	try {
		verificaPalindromo(string);
	} catch (e) {
		throw e;
	}
}

tryCatchExemplo();
```

### Finally

```jsx
function verificaPalindromo(string) {
	if (!string) throw "String Inválida";

	return string === string.split('').reverse().join();
}

function tryCatchExemplo(string) {
	try {
		verificaPalindromo(string);
	} catch (e) {
		console.log(e);
	} finally {
		console.log('A string enviada foi: ' + string);
	}
}

tryCatchExemplo();
```