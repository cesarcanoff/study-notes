class ContaUniversitaria extends ContaBancaria {
  constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = 'Universitária';
  }

  sacar (valor) {
    if (valor > 500) {
      return 'Operação Negada!';
    }
      this._saldo = this._saldo - valor;
      return this._saldo;
  }
}