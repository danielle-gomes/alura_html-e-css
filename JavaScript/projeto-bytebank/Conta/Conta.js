//Classe abstrata - não pode ser instanciada, só serve pra ser herdada

export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata")
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor){ //assessor
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){ //assessor
        return this._cliente
    }

    get saldo(){ //assessor
        return this._saldo
    }


    //Método abstrato - não é feito pra ser chamado diretamente e sim pra ser sobrescrito  
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){ //método ou função
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0
    }

    depositar(valor){ //método ou função
        this._saldo += valor       
    }

    tranferir(valor, conta){ //método ou função
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        
    }
}