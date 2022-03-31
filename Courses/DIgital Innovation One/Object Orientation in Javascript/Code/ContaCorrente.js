class ContaCorrente extends ContaBancaria {
  constructor (agencia, numero, cartaoCredito) {
    super (agencia, numero);
    this.tipo = 'Corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito () {
    return this._cartaoCredito;
  }
  
  set cartaoCredito (valor) {
    this.cartaoCredito = valor;
  }
}