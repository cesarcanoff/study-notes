// BLOCK SCOPES
{
  // DENTRO DO ESCOPO
  let name = 'César';
  let testes = function () {
    console.log('Hello!');
  }
  // DENTRO DO ESCOPO
  testes();
}

// FORA DO ESCOPO
testes();