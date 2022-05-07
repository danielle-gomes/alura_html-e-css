export class Cliente{

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf, senha){ // A inicialização de atributos é a principal responsabilidade do construtor.
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
        
    }

    autenticar(){
        return true
    }
}