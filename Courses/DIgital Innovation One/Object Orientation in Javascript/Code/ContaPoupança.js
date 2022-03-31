class ContaCorrente extends ContaBancaria {
  constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = 'Poupança';
    this._cartaoCredito = cartaoCredito;
  }
}