class ContaBancaria {
  constructor (agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valorSaldo;
  }

  sacar (valor) {
    if (valor > this._saldo) {
      return 'Operação Negada!';
    }
      this._saldo = this._saldo - valor;
      return this._saldo;
  }

  depositar (valor) {
    this._saldo += valor;
    return this._saldo;
  }
}