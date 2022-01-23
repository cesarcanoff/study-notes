// ESCOPO LOCAL.
function teste() {
  let nome = 'César';
  console.log(nome);
}
teste();

{
  // TUDO ESCRITO AQUI, FICARÁ NESSE ESCOPO.
  let idade = 17;
  console.log(idade)
}
