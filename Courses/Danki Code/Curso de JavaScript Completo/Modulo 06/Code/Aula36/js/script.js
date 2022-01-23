function testes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const erro = false;
      if (!erro) {
        resolve('Foi resolvido com sucesso!');
      } else {
        reject('Houve um erro inesperado!');
      }
    }, 2000);
  })
}

testes()
  .then(function (res) {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })

async function testes2() {
  await testes().then((res) => {
    console.log(res);
  })
  console.log('Olá');
}

testes2()
