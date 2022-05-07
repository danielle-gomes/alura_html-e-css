// Ser autenticável significa ter o método autenticar
// polimorfismo = propriedade q trata objetos diferentes de maneiras similares (fizemos isso ao tentar "autenticar" gerentes, diretores, clientes, funcionários, etc)

//duck typing = não interessa se é do tipo cliente, funcionário etc etc, interessa se ele tem as propriedades e metodos q eu quero utilizar
//orientação a objetos = tem herança, métodos, propriedades, mas tem principalmente encapsulamento e polimorfismo
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}
