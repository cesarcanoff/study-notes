# Criando Erros

## Objetivos

1. Explicar como manipular objeto error;

---

### O objeto Error

```jsx
new Error(message, fileName, lineNumber);
// TODOS OS PARÂMETROS SÃO OPCIONAIS.

const myError = new Error('Mensagem Inválida');

throw myError;
```

```jsx
new Error(message, fileName, lineNumber);
// TODOS OS PARÂMETROS SÃO OPCIONAIS.

const myError = new Error('Mensagem Inválida');
myError.name = 'Invalid Message';
throw myError;
```