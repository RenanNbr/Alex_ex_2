class ContaBancaria {
    constructor(titular, saldo, numConta) {
      this.titular = titular;
      this.saldo = saldo;
      this.numConta = numConta;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado com sucesso. O novo saldo é de R$ ${this.saldo}.`;
      } else {
        return "Valor do depósito deve ser positivo.";
      }
    }
  
    retirar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Retirada de R$ ${valor} realizada com sucesso. O novo saldo é de R$ ${this.saldo}.`;
      } else {
        return "Valor da retirada deve ser positivo e inferior ou igual ao saldo atual.";
      }
    }
  
    resumoConta() {
      return `Titular: ${this.titular}, Número da conta: ${this.numConta}, Saldo: R$ ${this.saldo}.`;
    }
  }
  
  
  const conta = new ContaBancaria("João Silva", 1000, "123-4");
  console.log(conta.depositar(500));
  console.log(conta.retirar(200));
  console.log(conta.resumoConta());