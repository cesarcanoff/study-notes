# Aula 037 - Promises, Async e Await

```jsx
/*
  -----------------------------------
  Promises, Async e Await
  -----------------------------------
  PROMISE RESOLVE UMA FUNÇÃO,
  OU SE HOUVER ERRO, ELA É REJEITADA. 
*/

// PROMISE
function testes () {
  return new Promise((resolve, reject) => {
    let err = false;

    if (err) { // VERIFICANDO SE A VARIÁVEL ERR É TRUE.
      reject('[ERRO] - Houve um erro!'); // SE SIM, HOUVE UM ERRO.
    } else {
      resolve("A Promise foi resolvida com sucesso!");
      // SE NÃO, A PROMISE É RESOLVIDA.
    }
  })
}

testes().then((resolve) => {
  console.log(resolve);
}).catch((err) => {
  console.log(err);
});

// ASYNC FUNCTIONS AND AWAY
async function testes2 () {
  // SÓ SERÁ EXECUTADA QUANDO A PROMISE TERMINAR.
  await testes().then((resolve) => {
    console.log(resolve);
  })
  console.log('Hello');
}

testes2();
```