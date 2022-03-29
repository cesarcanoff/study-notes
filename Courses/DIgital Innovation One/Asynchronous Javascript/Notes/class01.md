# Assincronicidade

### Objetivos

1. Explicar o que são Promises;
2. Ensinar como manipulá-las;
3. Apresentar as palavras-chave “async” e await“

---

## ASSÍNCRONO - QUE NÃO OCORRE OU NÃO SE EFETIVA AO MESMO TEMPO.

---

### Promises

### Possui 3 estados

- Pending;
- Fulfilled;
- Rejected.

---

```jsx
const myPromise = new Promise((resolve, reject) => {
	window.setTimeout(() => {
		resolve(console.log('RESOLVIDA!'));
	}, 2000);
});
```

```jsx
const myPromise = new Promise((resolve, reject) => {
	window.setTimeout(() => {
		resolve(console.log('RESOLVIDA!'));
	}, 2000);
});

await myPromise
				.then((result) => result + ' Passando pelo then')
				.then((result) => result + ' e agora acabaou!')
				.catch((err) => console.log(err.message));
```

```jsx
async function resolvePromise() {
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(console.log('RESOLVIDA!'));
		}, 3000);
	});

	await myPromise
				.then((result) => result + ' Passando pelo then')
				.then((result) => result + ' e agora acabaou!')
				.catch((err) => console.log(err.message));

	return resolved;
}
```

```jsx
async function resolvePromise() {
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(console.log('RESOLVIDA!'));
		}, 3000);
	});

	let result;

	try {
		result = await myPromise
			.then((result) => result + ' Passando pelo then')
			.then((result) => result + ' e agora acabaou!');
	} catch () {
		result = err.message;
	}

	return resolved;
}
```