console.log("Atribuição de variáveis")

const idade = 28
const nome = "Ricardo"
const sobrenome = "Bugan"

console.log(nome + " " + sobrenome) // concatenação
console.log(nome, sobrenome) // concatenação q também funciona igual o de cima
console.log(`Meu nome é ${nome}` ) // colocando a variável dentro do texto (não são aspas, e sim crase, que vai nas letras)
console.log(`Meu nome é ${nome} ${sobrenome}` ) // duas variáveis dentro do texto

nome = nome + sobrenome // isso não vai funcionar, pq o nome é uma CONSTANTE. não pode variar.
// nesse caso, poderiamos declarar o const nome = "Ricardo" como let nome = "Ricardo".

let contador = 0
contador = contador + 1 // já isso vai funcionar por causa do let



