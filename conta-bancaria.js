const contaBancaria = {
    titular: 'José Hector',
    saldo: 0,
    depositar: function (valorDoDeposito) {
        return this.saldo += valorDoDeposito;
    },
    sacar: function (valorDeSaque) {
        if ((this.saldo - valorDeSaque) > 0){
            return this.saldo -= valorDeSaque;
        }else {
            console.log('Não foi possível realizar o saque, saldo insuficiente.');
        }
    }
};
//console.log(contaBancaria);

//contaBancaria.depositar(5000);
//console.log(contaBancaria.saldo);

//contaBancaria.sacar(3000);
//console.log(contaBancaria.saldo);

const cliente = {
    nome: 'Maria Tret',
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}. Saldo: ${cliente.conta.saldo}`);
}

mostrarSaldo(cliente);

cliente.conta.depositar(10000);
mostrarSaldo(cliente);

cliente.conta.sacar(2000);
mostrarSaldo(cliente);

