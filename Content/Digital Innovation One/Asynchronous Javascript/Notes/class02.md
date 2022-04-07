# Consumindo APIs

### Objetivos

1. Explicar o que são APIs;
2. Ensinar como lidar com requisições dessas APIs;
3. Apresentar o método fetch()

---

### O que são APIs

APIs - (Application Programming Interface)

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessá-la por meio de URLs.

---

### JSON: JavaScript Object Notation

É muito comum que as APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando recebemos.

---

```jsx
{
	"description": "Schema POST bank",
	"type": "object",
	"properties": {
		"id": {
			"type": "number",
			"minimum": 0
		},
		"code": {
		"type": "string"
		},
		"name": {
			"type": "string"
		}
	}
}
```

## fetch

```jsx
fetch(url, options)
	.then(response => response.json())
	.then(json => console.log(json));
```

```jsx
fetch('https://endereco-api.com/', {
	method: 'GET',
	cache: 'no-cache',
})
	.then(response => response.json())
	.then(json => console.log(json))
```

```jsx
fetch('https://endereco-api.com/', {
	method: 'POST',
	cache: 'no-cache',
	body: JSON..stringfy(data)
})
	.then(response => response.json())
	.then(json => console.log(json))
```